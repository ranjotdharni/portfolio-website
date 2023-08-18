import useSpline from '@splinetool/r3f-spline';
import { OrthographicCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export default function ContactFormCanvas() {
    return <div style={{width: '30vw', height: '30vh', position: 'absolute', top: '350vh', left: '60vw'}}>
        <Canvas>
            <Scene />
        </Canvas>
    </div>
}

function Scene({ ...props }) {
  const { nodes, materials } = useSpline('https://prod.spline.design/XaH43SKM4jYpmKjd/scene.splinecode')
  return (
    <>
      <color attach="background" args={['#dcdde1']} />
      <group {...props} dispose={null}>
        <scene name="Scene">
          <group name="Group 5" position={[-102.03, 1500.11, -95.37]}>
            <group name="envelope_copy" position={[-1.56, -204.79, -8.16]} scale={92.85}>
              <group name="1" scale={0.01}>
                <group name="Scene1">
                  <group name="Envelope">
                    <mesh
                      name="Rectangle_4"
                      geometry={nodes.Rectangle_4.geometry}
                      material={nodes.Rectangle_4.material}
                      castShadow
                      receiveShadow
                      position={[-1.46, -0.13, 1.17]}
                      scale={0.86}
                    />
                    <mesh
                      name="Rectangle_3"
                      geometry={nodes.Rectangle_3.geometry}
                      material={nodes.Rectangle_3.material}
                      castShadow
                      receiveShadow
                      position={[-1.46, 11.47, 1.17]}
                      scale={0.86}
                    />
                    <mesh
                      name="Rectangle_2"
                      geometry={nodes.Rectangle_2.geometry}
                      material={nodes.Rectangle_2.material}
                      castShadow
                      receiveShadow
                      position={[-1.01, -6.23, -2.44]}
                      scale={0.86}
                    />
                    <mesh
                      name="Cube"
                      geometry={nodes.Cube.geometry}
                      material={nodes.Cube.material}
                      castShadow
                      receiveShadow
                      position={[0, -22.94, 9.25]}
                      scale={0.86}
                    />
                  </group>
                  <group name="Directional_Light" rotation={[-0.51, 0.63, 0.76]} scale={1} />
                </group>
              </group>
            </group>
            <group name="card_copy" position={[-26.46, -46.08, -8.16]} scale={77.24}>
              <group name="4" scale={0.01}>
                <group name="Scene2">
                  <group name="Card" position={[34.25, 40.56, 10.95]} scale={0.91}>
                    <mesh
                      name="Rectangle_8"
                      geometry={nodes.Rectangle_8.geometry}
                      material={nodes.Rectangle_8.material}
                      castShadow
                      receiveShadow
                      position={[-55.66, 36.17, 5.48]}
                      rotation={[0, 0, -Math.PI / 2]}
                      scale={1.42}
                    />
                    <mesh
                      name="Rectangle_41"
                      geometry={nodes.Rectangle_41.geometry}
                      material={nodes.Rectangle_41.material}
                      castShadow
                      receiveShadow
                      position={[-82.11, -13.47, 3.22]}
                      scale={1.42}
                    />
                    <mesh
                      name="Merged_Geometry"
                      geometry={nodes.Merged_Geometry.geometry}
                      material={nodes.Merged_Geometry.material}
                      castShadow
                      receiveShadow
                      position={[-46.51, 10.51, 6.06]}
                      scale={1.55}
                    />
                    <mesh
                      name="Ellipse_2"
                      geometry={nodes.Ellipse_2.geometry}
                      material={nodes.Ellipse_2.material}
                      castShadow
                      receiveShadow
                      position={[67.22, -17.99, 3.23]}
                      scale={1.42}
                    />
                    <mesh
                      name="Ellipse"
                      geometry={nodes.Ellipse.geometry}
                      material={nodes.Ellipse.material}
                      castShadow
                      receiveShadow
                      position={[39.36, -17.99, 3.23]}
                      scale={1.42}
                    />
                    <mesh
                      name="Rectangle_21"
                      geometry={nodes.Rectangle_21.geometry}
                      material={nodes.Rectangle_21.material}
                      castShadow
                      receiveShadow
                      position={[0, 20.92, -6.07]}
                      scale={1.42}
                    />
                    <group name="5" position={[-82.11, -13.47, 3.22]} scale={1.42}>
                      <mesh
                        name="mesh_1_instance_1"
                        geometry={nodes.mesh_1_instance_1.geometry}
                        material={nodes.mesh_1_instance_1.material}
                        castShadow
                        receiveShadow
                      />
                      <mesh
                        name="mesh_1_instance_2"
                        geometry={nodes.mesh_1_instance_2.geometry}
                        material={nodes.mesh_1_instance_2.material}
                        castShadow
                        receiveShadow
                        position={[10, 0, 0]}
                      />
                      <mesh
                        name="mesh_1_instance_3"
                        geometry={nodes.mesh_1_instance_3.geometry}
                        material={nodes.mesh_1_instance_3.material}
                        castShadow
                        receiveShadow
                        position={[20, 0, 0]}
                      />
                      <mesh
                        name="mesh_1_instance_4"
                        geometry={nodes.mesh_1_instance_4.geometry}
                        material={nodes.mesh_1_instance_4.material}
                        castShadow
                        receiveShadow
                        position={[30, 0, 0]}
                      />
                    </group>
                  </group>
                  <group name="Directional_Light1" rotation={[-0.51, 0.63, 0.76]} scale={1} />
                </group>
              </group>
            </group>
          </group>
          <group name="temping" position={[291.36, 1510, 55.78]} rotation={[0, -1.57, 0]} scale={[100, 100, 75.37]}>
            <group name="8" position={[0, 0, 0]} rotation={[0, 0, 0]} scale={0.01}>
              <group name="Scene3">
                <group name="Directional_Light2" rotation={[-0.75, 0.79, 0.91]} />
                <mesh
                  name="Rectangle_22"
                  geometry={nodes.Rectangle_22.geometry}
                  material={nodes.Rectangle_22.material}
                  castShadow
                  receiveShadow
                  position={[16, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={1}
                />
                <mesh
                  name="Rectangle"
                  geometry={nodes.Rectangle.geometry}
                  material={nodes.Rectangle.material}
                  castShadow
                  receiveShadow
                  position={[0, 0, 0]}
                  rotation={[0, Math.PI / 2, 0]}
                  scale={1}
                />
              </group>
            </group>
          </group>
          <directionalLight
            name="Directional Light"
            castShadow
            intensity={0.7}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-near={-10000}
            shadow-camera-far={100000}
            shadow-camera-left={-1361.666}
            shadow-camera-right={1361.666}
            shadow-camera-top={1361.666}
            shadow-camera-bottom={-1361.666}
            position={[200, 300, 300]}
          />
          <group name="Group 3" position={[427.48, 939.1, 55.69]} rotation={[0, -1.57, 0]} scale={[1, 3.76, 2.18]}>
            <group name="Scene4">
              <group name="Directional_Light3" rotation={[-0.75, 0.79, 0.91]} />
              <mesh
                name="Rectangle_23"
                geometry={nodes.Rectangle_23.geometry}
                material={nodes.Rectangle_23.material}
                castShadow
                receiveShadow
                position={[16, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle1"
                geometry={nodes.Rectangle1.geometry}
                material={nodes.Rectangle1.material}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
          </group>
          <group name="Group 2" position={[539.33, 1296.34, 55.62]} rotation={[0, -1.57, 0]} scale={[1, 1, 1.56]}>
            <group name="Scene5">
              <group name="Directional_Light4" rotation={[-0.75, 0.79, 0.91]} />
              <mesh
                name="Rectangle_24"
                geometry={nodes.Rectangle_24.geometry}
                material={nodes.Rectangle_24.material}
                castShadow
                receiveShadow
                position={[16, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle2"
                geometry={nodes.Rectangle2.geometry}
                material={nodes.Rectangle2.material}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
          </group>
          <group name="Group" position={[779.9, 1510, 55.46]} rotation={[0, -1.57, 0]} scale={[1, 1, 0.75]}>
            <group name="Scene6">
              <group name="Directional_Light5" rotation={[-0.75, 0.79, 0.91]} />
              <mesh
                name="Rectangle_25"
                geometry={nodes.Rectangle_25.geometry}
                material={nodes.Rectangle_25.material}
                castShadow
                receiveShadow
                position={[16, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
              <mesh
                name="Rectangle3"
                geometry={nodes.Rectangle3.geometry}
                material={nodes.Rectangle3.material}
                castShadow
                receiveShadow
                position={[0, 0, 0]}
                rotation={[0, Math.PI / 2, 0]}
                scale={1}
              />
            </group>
          </group>
          <group name="Phone" position={[517.19, 998.02, -51.63]}>
            <mesh
              name="Text"
              geometry={nodes.Text.geometry}
              material={materials['Text Material']}
              castShadow
              receiveShadow
              position={[197, 671.55, -25]}
            />
            <mesh
              name="Background"
              geometry={nodes.Background.geometry}
              material={materials['Background Material']}
              castShadow
              receiveShadow
              position={[-81.5, 102.8, -67.66]}
              rotation={[-Math.PI, 0, -Math.PI]}
              scale={[-1, 1, 1]}
            />
          </group>
          <group name="submitbtn" position={[799.7, 585.85, -40.59]} scale={[2.17, 1.78, 2.58]}>
            <mesh
              name="Text1"
              geometry={nodes.Text1.geometry}
              material={materials['Text1 Material']}
              castShadow
              receiveShadow
              position={[1.03, -0.82, 12.64]}
              scale={[0.46, 0.56, 0.39]}
            />
            <mesh
              name="Button BG"
              geometry={nodes['Button BG'].geometry}
              material={materials.White}
              castShadow
              receiveShadow
              position={[0, 0, 0.18]}
            />
          </group>
          <group name="Group 6" position={[44, 432.35, -13.23]}>
            <group name="mail_icon" position={[190.37, 146.3, -10.99]} scale={[27.78, 27.52, 110.12]}>
              <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                <group name="mail_iconobjcleanermaterialmergergles">
                  <mesh
                    name="Object_2"
                    geometry={nodes.Object_2.geometry}
                    material={nodes.Object_2.material}
                    castShadow
                    receiveShadow
                  />
                  <mesh
                    name="Object_3"
                    geometry={nodes.Object_3.geometry}
                    material={nodes.Object_3.material}
                    castShadow
                    receiveShadow
                  />
                </group>
              </group>
            </group>
            <group name="square_circle_icons_copy" position={[230.18, 145.75, 13.23]} scale={[30.2, 29.83, 26.6]}>
              <group name="17" scale={0.01}>
                <group name="Scene7">
                  <group name="Directional_Light6" rotation={[0.12, 0.28, -0.41]} scale={1} />
                  <group name="Phone1" position={[427.63, 0, -38.55]}>
                    <mesh
                      name="Cube_2"
                      geometry={nodes.Cube_2.geometry}
                      material={nodes.Cube_2.material}
                      castShadow
                      receiveShadow
                      position={[-48.95, 89.32, 61.05]}
                      rotation={[0, 0, 0.56]}
                      scale={1}
                    />
                    <mesh
                      name="Rectangle_26"
                      geometry={nodes.Rectangle_26.geometry}
                      material={nodes.Rectangle_26.material}
                      castShadow
                      receiveShadow
                      position={[0, 0, -93.82]}
                    />
                  </group>
                </group>
              </group>
            </group>
            <group name="Group 51" position={[-255.69, -204.7, -27.74]} scale={[1.26, 1.27, 1]}>
              <group name="linkedin_3d" position={[38.94, 236.29, 42.98]} scale={[98.87, 98.59, 125]}>
                <group name="Sketchfab_model1" rotation={[-Math.PI / 2, 0, 0]}>
                  <group
                    name="ee76677423204f96b7112f4f339ae4aafbx"
                    position={[0.1, 0, 0.09]}
                    rotation={[Math.PI / 2, 0, 0]}
                    scale={0.01}
                  >
                    <group name="RootNode">
                      <group name="Camada_03">
                        <group name="Objeto_1">
                          <mesh
                            name="Objeto_1_Tinta_(1)_0"
                            geometry={nodes['Objeto_1_Tinta_(1)_0'].geometry}
                            material={nodes['Objeto_1_Tinta_(1)_0'].material}
                            castShadow
                            receiveShadow
                          />
                        </group>
                      </group>
                      <group name="Camada_05">
                        <group name="Objeto_2">
                          <mesh
                            name="Objeto_2_Tinta_(3)_0"
                            geometry={nodes['Objeto_2_Tinta_(3)_0'].geometry}
                            material={nodes['Objeto_2_Tinta_(3)_0'].material}
                            castShadow
                            receiveShadow
                          />
                        </group>
                        <group name="Objeto_3">
                          <mesh
                            name="Objeto_3_Tinta_(3)_0"
                            geometry={nodes['Objeto_3_Tinta_(3)_0'].geometry}
                            material={nodes['Objeto_3_Tinta_(3)_0'].material}
                            castShadow
                            receiveShadow
                          />
                        </group>
                        <group name="Objeto_4">
                          <mesh
                            name="Objeto_4_Tinta_(3)_0"
                            geometry={nodes['Objeto_4_Tinta_(3)_0'].geometry}
                            material={nodes['Objeto_4_Tinta_(3)_0'].material}
                            castShadow
                            receiveShadow
                          />
                        </group>
                      </group>
                      <group
                        name="Perspetiva"
                        position={[168.99, -231.9, 45.36]}
                        rotation={[0.07, -0.04, 2.01]}
                        scale={1}
                      />
                      <group name="Superior" position={[44.86, 0.36, 7654.93]} rotation={[0, Math.PI / 2, 0]} />
                      <group name="Frontal" position={[26.77, -153.19, 32.06]} rotation={[0, 0, Math.PI / 2]} />
                      <group name="Direita" position={[15984.08, 28.17, 74.67]} rotation={[Math.PI, 0, 0]} />
                    </group>
                  </group>
                </group>
              </group>
              <mesh
                name="Button BG 2"
                geometry={nodes['Button BG 2'].geometry}
                material={materials.White}
                castShadow
                receiveShadow
                position={[79.65, 276.88, 23.49]}
              />
            </group>
            <group name="Group 4" position={[-80.12, -204.7, -27.74]} scale={[1.26, 1.27, 1]}>
              <group name="scene 2" position={[35.51, 240.46, 40.97]} scale={[6.79, 7.03, 6.79]}>
                <mesh
                  name="NODE_333"
                  geometry={nodes.NODE_333.geometry}
                  material={nodes.NODE_333.material}
                  castShadow
                  receiveShadow
                  position={[0, 9.99, 0.64]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_326"
                  geometry={nodes.NODE_326.geometry}
                  material={nodes.NODE_326.material}
                  castShadow
                  receiveShadow
                  position={[0, 10, 1.49]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_321"
                  geometry={nodes.NODE_321.geometry}
                  material={nodes.NODE_321.material}
                  castShadow
                  receiveShadow
                  position={[0, 9.99, 1.81]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_320"
                  geometry={nodes.NODE_320.geometry}
                  material={nodes.NODE_320.material}
                  castShadow
                  receiveShadow
                  position={[0, 9.99, 1.8]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_284"
                  geometry={nodes.NODE_284.geometry}
                  material={nodes.NODE_284.material}
                  castShadow
                  receiveShadow
                  position={[0, 10, 1.81]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_285"
                  geometry={nodes.NODE_285.geometry}
                  material={nodes.NODE_285.material}
                  castShadow
                  receiveShadow
                  position={[0.01, 10, 1.76]}
                  scale={0.05}
                />
                <mesh
                  name="NODE_167"
                  geometry={nodes.NODE_167.geometry}
                  material={nodes.NODE_167.material}
                  castShadow
                  receiveShadow
                  position={[0, 9.99, 1.33]}
                  scale={0.05}
                />
              </group>
              <mesh
                name="Button BG 21"
                geometry={nodes['Button BG 21'].geometry}
                material={materials.White}
                castShadow
                receiveShadow
                position={[79.65, 276.88, 23.49]}
              />
            </group>
          </group>
          <OrthographicCamera name="20" makeDefault={true} far={10000} near={-50000} />
          <hemisphereLight name="Default Ambient Light" intensity={0.75} color="#eaeaea" />
        </scene>
      </group>
    </>
  )
}
