import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";

const maxY = 6.302;

function getCurrentY() {
    return ((window.innerHeight + window.scrollY) / document.body.offsetHeight) / maxY;
}

function getRandom(min: number, max: number): number {
    const lower = Math.min(min, max);
    const upper = Math.max(min, max);
    const randomInRange = Math.random() * (upper - lower + 1) + lower;
    return randomInRange;
}

const fragmentShader = `
void main() {
  gl_FragColor = vec4(88.0, 0.0, 88.0, 1.0);
}
`

const vertexShader = `
uniform float uTime;

mat3 rotation3dY(float angle) {
  return mat3(
    cos(angle), 0.0, -sin(angle),
    0.0, 1.0, 0.0,
    sin(angle), 0.0, cos(angle)
  );
}


void main() {
  vec3 particlePosition = position * rotation3dY(uTime * -0.05);

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = 0.2;
}
`

const Stars = (props: {count: number}) => {

    const { count } = props;
    const radius = 10;
    const points = useRef<any>()!;
    const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
      
    for (let i = 0; i < count; i++) 
    {
        let x = getRandom(-radius, radius);
        let y = getRandom(-radius, radius);
        let z = getRandom(-radius, radius);
  
        positions.set([x, y, z], i * 3);
    }
      
    return positions;
}, [count]);
  
    const uniforms = useMemo(() => ({
      uTime: {
        value: 0.0
      },
      uRadius: {
        value: radius
      }
    }), [])
  
    useFrame((state) => {
      const { clock } = state;
      var move = 15 * getCurrentY();
  
      points.current.material.uniforms.uTime.value = clock.elapsedTime;

      points.current.position.y = -20 + (move + (1 * (Math.pow(Math.E, -500000 * (1 - getCurrentY() + 0.0005)))));
    }); //-20 + (15 * getCurrentY() - (0.001 * (1 / Math.pow(1 - getCurrentY() + 0.0001, -25000))));
  
    return (
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    );
  };

function StarsCanvas() {
    return (
        <div style={{zIndex:'1', width: '100vw', height: '100vh', position: 'absolute', left: '0', top: '530vh'}}>
            <Canvas
            frameloop='demand'
                shadows
                camera={{position: [0, 0, 1], fov: 82}}
                gl={{preserveDrawingBuffer: true}}
                >

                <Stars count={4000} />
            </Canvas>
        </div>
    );
}

export default StarsCanvas