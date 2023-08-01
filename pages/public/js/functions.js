var Timer = /** @class */ (function () {
    function Timer() {
        this.start = new Date();
    }
    Timer.prototype.getElapsedTime = function () {
        return ((new Date()).valueOf() - this.start.valueOf()) / 1000;
    };
    return Timer;
}());
export { Timer };
var Director = /** @class */ (function () {
    function Director(camera) {
        this.camera = camera;
        this.boundingBox = document.querySelector('#action');
        this.distanceMultiplier = 1.2;
        this.posY = window.scrollY / 100;
        this.scroll = window.scrollY / 100;
        /*this.scene = 0;
        this.transition = true;

        this.stops = new Map([
            [0, {y: 0}],
            [1, {y: 5}]
        ]);

        this.nextStop = this.stops.get(1);*/
        this.camera.position.set(0, this.posY, 5);
    }
    Director.prototype.scrollReady = function () {
        return (window.scrollY / 100) != this.posY;
    };
    Director.prototype.handleScroll = function () {
        var scroll = window.scrollY / 100;
        if (scroll > this.posY) {
            this.posY = Math.min((scroll - this.posY) * 0.25, scroll) * this.distanceMultiplier;
        }
        if (scroll < this.posY) {
            this.posY = Math.max((scroll - this.posY) * 0.25, scroll) * this.distanceMultiplier;
        }
        this.camera.position.y = -this.posY;
        this.boundingBox.style.top = (window.scrollY / (window.innerHeight * 0.01)) + '%';
    };
    return Director;
}());
export { Director };
export function toObjString(str) {
    return (str.slice(0, 2) == 'o_' ? "/gltf/".concat(str, "/scene.glb") : "/gltf/".concat(str, "/scene.gltf"));
}
export function getWavesVertexShader() {
    return "\n        uniform float time;\n        varying vec3 coords;\n\n        float random (in vec2 st) {\n            return fract(sin(dot(st.xy,\n                                 vec2(12.9898,78.233)))\n                         * 43758.5453123);\n        }\n\n        float noise (in vec2 st) {\n            vec2 i = floor(st);\n            vec2 f = fract(st);\n\n\n            float a = random(i);\n            float b = random(i + vec2(1.0, 0.0));\n            float c = random(i + vec2(0.0, 1.0));\n            float d = random(i + vec2(1.0, 1.0));\n\n            vec2 u = f*f*(3.0-2.0*f);\n\n            return mix(a, b, u.x) +\n                    (c - a)* u.y * (1.0 - u.x) +\n                    (d - b) * u.x * u.y;\n        }\n\n        mat2 rotate2d(float angle){\n            return mat2(cos(angle),-sin(angle),\n                      sin(angle),cos(angle));\n        }\n\n        void main() \n        {\n            gl_PointSize = 2.0;\n            coords = position;\n\n            vec3 pos = position;\n            vec2 capture1 = vec2(position.xy);\n            vec2 capture2 = vec2(position.yx);\n            pos.z += noise(capture1 * 2.5 + (time * 0.75)) * 0.25;\n            pos.z += noise(rotate2d(3.1415 / 4.0) * capture2 * 3.0 - (time * 0.5)) * 0.1;\n            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  \n        }\n    ";
}
export function getWavesFragmentShader() {
    return "\n        uniform float time;\n        varying vec3 coords;\n\n        void main() \n        {\n            gl_FragColor = vec4(abs(coords.x / 2.0), abs(coords.y / 2.0), 150.0, 1.0);  \n        }\n    ";
}
