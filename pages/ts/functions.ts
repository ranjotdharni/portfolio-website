export class Timer {
    start: Date;

    constructor() {
        this.start = new Date();
    }

    getElapsedTime() {
        return ((new Date()).valueOf() - this.start.valueOf()) / 1000;
    }
}

export function toObjString(str: string): string
{
    return `/gltf/${str}/scene.gltf`;
}

export function getWavesVertexShader(): string
{
    return `
        uniform float time;
        varying vec3 coords;

        float random (in vec2 st) {
            return fract(sin(dot(st.xy,
                                 vec2(12.9898,78.233)))
                         * 43758.5453123);
        }

        float noise (in vec2 st) {
            vec2 i = floor(st);
            vec2 f = fract(st);


            float a = random(i);
            float b = random(i + vec2(1.0, 0.0));
            float c = random(i + vec2(0.0, 1.0));
            float d = random(i + vec2(1.0, 1.0));

            vec2 u = f*f*(3.0-2.0*f);

            return mix(a, b, u.x) +
                    (c - a)* u.y * (1.0 - u.x) +
                    (d - b) * u.x * u.y;
        }

        mat2 rotate2d(float angle){
            return mat2(cos(angle),-sin(angle),
                      sin(angle),cos(angle));
        }

        void main() 
        {
            gl_PointSize = 2.0;
            coords = position;

            vec3 pos = position;
            vec2 capture1 = vec2(position.xy);
            vec2 capture2 = vec2(position.yx);
            pos.z += noise(capture1 * 2.5 + (time * 0.75)) * 0.25;
            pos.z += noise(rotate2d(3.1415 / 4.0) * capture2 * 3.0 - (time * 0.5)) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
        }
    `
}

export function getWavesFragmentShader(): string
{
    return `
        uniform float time;
        varying vec3 coords;

        void main() 
        {
            gl_FragColor = vec4(abs(coords.x / 2.0), abs(coords.y / 2.0), 150.0, 1.0);  
        }
    `
}