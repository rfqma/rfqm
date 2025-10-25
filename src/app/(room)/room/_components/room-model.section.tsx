import { Fragment, Suspense, useRef, lazy } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { useGLTF, Html } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

const RoomDesktopSection = lazy(() => import("./room-desktop.section"));

type GLTFResult = GLTF & {
  nodes: {
    Cube_Material_0: THREE.Mesh;
    Cube001_Material001_0: THREE.Mesh;
    Cube001_Material_0: THREE.Mesh;
    Cube002_Material_0: THREE.Mesh;
    Cube002_Material002_0: THREE.Mesh;
    Cube003_Material003_0: THREE.Mesh;
    Cube010_Material001_0: THREE.Mesh;
    Cube014_Material_0: THREE.Mesh;
    Cube014_Material001_0: THREE.Mesh;
    Cube019_Material003_0: THREE.Mesh;
    Cube013_Material005_0: THREE.Mesh;
    Cube020_Material006_0: THREE.Mesh;
    Cube021_Material003_0: THREE.Mesh;
    Cube022_Material007_0: THREE.Mesh;
    Cube023_Material008_0: THREE.Mesh;
    Cube024_Material_0: THREE.Mesh;
    Cube026_Material004_0: THREE.Mesh;
    Cube028_Material_0: THREE.Mesh;
    Cube011_Material004_0: THREE.Mesh;
    Cube018_Material004_0: THREE.Mesh;
    Cube025_Material_0: THREE.Mesh;
    Cube027_Material004_0: THREE.Mesh;
    Circle_Material003_0: THREE.Mesh;
    Circle_Material011_0: THREE.Mesh;
    Circle001_Material010_0: THREE.Mesh;
    Cone__0: THREE.Mesh;
    Cone001__0: THREE.Mesh;
    Cone002__0: THREE.Mesh;
    Cone003__0: THREE.Mesh;
    Cone004__0: THREE.Mesh;
    Cone005__0: THREE.Mesh;
    Cone007__0: THREE.Mesh;
    Cone008__0: THREE.Mesh;
    Cone010__0: THREE.Mesh;
    Cone011__0: THREE.Mesh;
    Cone006__0: THREE.Mesh;
    Cone009__0: THREE.Mesh;
    Cone012__0: THREE.Mesh;
    Cone013__0: THREE.Mesh;
    Cone014__0: THREE.Mesh;
    Cone015__0: THREE.Mesh;
    Cone016__0: THREE.Mesh;
    Cone017__0: THREE.Mesh;
    Cone018__0: THREE.Mesh;
    Cone019__0: THREE.Mesh;
    Cone020__0: THREE.Mesh;
    Cube043_Material_0: THREE.Mesh;
    Cube044_Material005_0: THREE.Mesh;
    Cube044_Material017_0: THREE.Mesh;
    Cube042_Material018_0: THREE.Mesh;
    Cube042_Material019_0: THREE.Mesh;
    Cube042_Material_0: THREE.Mesh;
    Cube042_Material001_0: THREE.Mesh;
    Cube042_Material012_0: THREE.Mesh;
    Cube042_Material009_0: THREE.Mesh;
    Cube042_Material013_0: THREE.Mesh;
    Cube042_Material014_0: THREE.Mesh;
    Cube042_Material006_0: THREE.Mesh;
    Cube042_Material016_0: THREE.Mesh;
    Cube042_Material015_0: THREE.Mesh;
    Cube042_Material011_0: THREE.Mesh;
    Cube048_Material018_0: THREE.Mesh;
    Cube049_Material005_0: THREE.Mesh;
    Cube050_Material_0: THREE.Mesh;
    Circle002_Material020_0: THREE.Mesh;
    Cube051_Material020_0: THREE.Mesh;
    Circle004_Material022_0: THREE.Mesh;
    Circle004_Material004_0: THREE.Mesh;
    Circle005_Material005_0: THREE.Mesh;
    Circle003_Material005_0: THREE.Mesh;
    Cube052_Material005_0: THREE.Mesh;
    Cube052_Material021_0: THREE.Mesh;
    Circle006_Material025_0: THREE.Mesh;
    Circle006_Material026_0: THREE.Mesh;
    Circle006_Material027_0: THREE.Mesh;
    Circle007_Material017_0: THREE.Mesh;
    Circle007_Material026_0: THREE.Mesh;
    Circle008_Material025_0: THREE.Mesh;
    Circle008_Material026_0: THREE.Mesh;
    Circle008_Material027_0: THREE.Mesh;
    Circle009_Material025_0: THREE.Mesh;
    Circle009_Material026_0: THREE.Mesh;
    Circle009_Material027_0: THREE.Mesh;
    Cube055_Material024_0: THREE.Mesh;
    Cube054_Material024_0: THREE.Mesh;
    Cube057_Material024_0: THREE.Mesh;
    Cube056_Material024_0: THREE.Mesh;
    Cube059_Material024_0: THREE.Mesh;
    Cube058_Material024_0: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
    ["Material.001"]: THREE.MeshStandardMaterial;
    ["Material.002"]: THREE.MeshStandardMaterial;
    ["Material.003"]: THREE.MeshStandardMaterial;
    ["Material.005"]: THREE.MeshStandardMaterial;
    ["Material.006"]: THREE.MeshStandardMaterial;
    ["Material.007"]: THREE.MeshStandardMaterial;
    ["Material.008"]: THREE.MeshStandardMaterial;
    ["Material.004"]: THREE.MeshStandardMaterial;
    ["Material.011"]: THREE.MeshStandardMaterial;
    ["Material.010"]: THREE.MeshStandardMaterial;
    Cone__0: THREE.MeshStandardMaterial;
    ["Material.017"]: THREE.MeshStandardMaterial;
    ["Material.018"]: THREE.MeshStandardMaterial;
    ["Material.019"]: THREE.MeshStandardMaterial;
    ["Material.012"]: THREE.MeshStandardMaterial;
    ["Material.009"]: THREE.MeshStandardMaterial;
    ["Material.013"]: THREE.MeshStandardMaterial;
    ["Material.014"]: THREE.MeshStandardMaterial;
    ["Material.016"]: THREE.MeshStandardMaterial;
    ["Material.015"]: THREE.MeshStandardMaterial;
    ["Material.020"]: THREE.MeshStandardMaterial;
    ["Material.022"]: THREE.MeshStandardMaterial;
    ["Material.021"]: THREE.MeshStandardMaterial;
    ["Material.025"]: THREE.MeshStandardMaterial;
    ["Material.026"]: THREE.MeshStandardMaterial;
    ["Material.027"]: THREE.MeshStandardMaterial;
    ["Material.024"]: THREE.MeshStandardMaterial;
  };
  animations: THREE.AnimationClip[];
};

export default function RoomModelSection({
  onScreenClickAction,
  onCloseAction,
  isDesktopView,
  isMobile,
}: {
  onScreenClickAction: () => void;
  onCloseAction: () => void;
  isDesktopView: boolean;
  isMobile: boolean;
}) {
  const { nodes, materials } = useGLTF(
    "/models/room.glb",
  ) as unknown as GLTFResult;

  const groupRef = useRef<THREE.Group>(null);

  return (
    <Fragment>
      {/*<OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={false}
        minDistance={20}
        maxDistance={100}
        minPolarAngle={0.1}
        maxPolarAngle={Math.PI / 2.2}
        target={[-2, 2, 0]}
        enableDamping={true}
        dampingFactor={0.05}
      />*/}
      <EffectComposer>
        <Bloom luminanceThreshold={0.4} intensity={1} mipmapBlur />
      </EffectComposer>
      <Suspense fallback={null}>
        <group ref={groupRef} dispose={null}>
          <group
            position={[0, -5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.2}
          >
            <group rotation={[Math.PI / 2, 0, 0]}>
              <group
                position={[-78.74, 96.592, 46.691]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[105.739, 105.739, 15.729]}
              >
                <mesh
                  geometry={nodes.Cube001_Material001_0.geometry}
                  material={materials["Material.001"]}
                  receiveShadow
                />
                <mesh
                  geometry={nodes.Cube001_Material_0.geometry}
                  material={materials.Material}
                  receiveShadow
                />
              </group>
              <group
                position={[-75, 0, -50]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 100, 14.875]}
              >
                <mesh
                  geometry={nodes.Cube002_Material_0.geometry}
                  material={materials.Material}
                  receiveShadow
                />
                <mesh
                  geometry={nodes.Cube002_Material002_0.geometry}
                  material={materials["Material.002"]}
                  receiveShadow
                />
              </group>
              <group
                position={[-77.198, 27.295, 62.546]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              >
                <mesh
                  geometry={nodes.Cube014_Material_0.geometry}
                  material={materials.Material}
                />
                <mesh
                  geometry={nodes.Cube014_Material001_0.geometry}
                  material={materials["Material.001"]}
                />
              </group>
              <group
                position={[-76.355, 46.756, 80.494]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.892}
              >
                <mesh
                  geometry={nodes.Circle_Material003_0.geometry}
                  material={materials["Material.003"]}
                />
                <mesh
                  geometry={nodes.Circle_Material011_0.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group
                position={[-60.307, 11.551, 12.846]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[71.25, 59.562, 10.381]}
              >
                <mesh
                  geometry={nodes.Cube044_Material005_0.geometry}
                  material={materials["Material.005"]}
                />
                <mesh
                  geometry={nodes.Cube044_Material017_0.geometry}
                  material={materials["Material.017"]}
                />
              </group>
              <group
                position={[-73.612, 87.04, 59.922]}
                rotation={[-1.303, 0, Math.PI / 2]}
                scale={100}
              >
                <mesh
                  geometry={nodes.Cube042_Material018_0.geometry}
                  material={materials["Material.018"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material019_0.geometry}
                  material={materials["Material.019"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material_0.geometry}
                  material={materials.Material}
                />
                <mesh
                  geometry={nodes.Cube042_Material001_0.geometry}
                  material={materials["Material.001"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material012_0.geometry}
                  material={materials["Material.012"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material009_0.geometry}
                  material={materials["Material.009"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material013_0.geometry}
                  material={materials["Material.013"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material014_0.geometry}
                  material={materials["Material.014"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material006_0.geometry}
                  material={materials["Material.006"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material016_0.geometry}
                  material={materials["Material.016"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material015_0.geometry}
                  material={materials["Material.015"]}
                />
                <mesh
                  geometry={nodes.Cube042_Material011_0.geometry}
                  material={materials["Material.011"]}
                />
              </group>
              <group
                position={[-63.985, 47.31, -79.943]}
                rotation={[-Math.PI / 2, 0, 0.316]}
                scale={[5.199, 5.199, 6.98]}
              >
                <mesh
                  geometry={nodes.Circle004_Material022_0.geometry}
                  material={materials["Material.022"]}
                />
                <mesh
                  geometry={nodes.Circle004_Material004_0.geometry}
                  material={materials["Material.004"]}
                />
              </group>
              {!isDesktopView && !isMobile && (
                <group
                  position={[-26.129, 44.04, -20.304]}
                  rotation={[-Math.PI / 2, 0, 1.837]}
                  scale={[15.465, 15.406, 16.071]}
                >
                  <mesh
                    geometry={nodes.Cube052_Material005_0.geometry}
                    material={materials["Material.005"]}
                    receiveShadow
                  />
                  <mesh
                    geometry={nodes.Cube052_Material021_0.geometry}
                    material={materials["Material.021"]}
                    receiveShadow
                  />
                  <mesh
                    geometry={nodes.Circle003_Material005_0.geometry}
                    material={materials["Material.005"]}
                    position={[0, 0.725, -2.187]}
                    rotation={[-Math.PI / 2, 0, 0]}
                    scale={[6.811, 6.554, 6.836]}
                    receiveShadow
                  />
                </group>
              )}
              <group
                position={[-25.094, 46.809, -70.853]}
                rotation={[-2.041, 0.02, -0.352]}
                scale={[0.749, 0.749, 1.146]}
              >
                <mesh
                  geometry={nodes.Circle006_Material025_0.geometry}
                  material={materials["Material.025"]}
                />
                <mesh
                  geometry={nodes.Circle006_Material026_0.geometry}
                  material={materials["Material.026"]}
                />
                <mesh
                  geometry={nodes.Circle006_Material027_0.geometry}
                  material={materials["Material.027"]}
                />
              </group>
              <group
                position={[-25.607, 47.267, -70.726]}
                rotation={[-1.966, 0.31, 0.22]}
                scale={[0.844, 0.844, 1.073]}
              >
                <mesh
                  geometry={nodes.Circle007_Material017_0.geometry}
                  material={materials["Material.017"]}
                />
                <mesh
                  geometry={nodes.Circle007_Material026_0.geometry}
                  material={materials["Material.026"]}
                />
              </group>
              <group
                position={[-23.673, 46.92, -71.878]}
                rotation={[-1.476, -0.326, 2.932]}
                scale={[0.749, 0.749, 0.986]}
              >
                <mesh
                  geometry={nodes.Circle008_Material025_0.geometry}
                  material={materials["Material.025"]}
                />
                <mesh
                  geometry={nodes.Circle008_Material026_0.geometry}
                  material={materials["Material.026"]}
                />
                <mesh
                  geometry={nodes.Circle008_Material027_0.geometry}
                  material={materials["Material.027"]}
                />
              </group>
              <group
                position={[-25.248, 47.34, -60.064]}
                rotation={[Math.PI, 0.829, -Math.PI]}
                scale={[0.749, 0.749, 1.043]}
              >
                <mesh
                  geometry={nodes.Circle009_Material025_0.geometry}
                  material={materials["Material.025"]}
                />
                <mesh
                  geometry={nodes.Circle009_Material026_0.geometry}
                  material={materials["Material.026"]}
                />
                <mesh
                  geometry={nodes.Circle009_Material027_0.geometry}
                  material={materials["Material.027"]}
                />
              </group>
              <group
                position={[-60.096, 40.037, 79.681]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={33.938}
              >
                <mesh
                  geometry={nodes.Cube054_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
                <mesh
                  geometry={nodes.Cube055_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
              </group>
              <group
                position={[-60.096, 27.15, 79.681]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={33.938}
              >
                <mesh
                  geometry={nodes.Cube056_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
                <mesh
                  geometry={nodes.Cube057_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
              </group>
              <group
                position={[-60.096, 14.681, 79.681]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={33.938}
              >
                <mesh
                  geometry={nodes.Cube058_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
                <mesh
                  geometry={nodes.Cube059_Material024_0.geometry}
                  material={materials["Material.024"]}
                />
              </group>
              <mesh
                geometry={nodes.Cube_Material_0.geometry}
                material={materials.Material}
                position={[5, -0.703, 5]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[95, 95, 3.73]}
                receiveShadow
              />
              <mesh
                geometry={nodes.Cube003_Material003_0.geometry}
                material={materials["Material.003"]}
                position={[82.779, 9.304, -88.123]}
                rotation={[-1.375, 0, 0]}
                scale={[104.96, 111.702, 104.96]}
              />
              <mesh
                geometry={nodes.Cube010_Material001_0.geometry}
                material={materials["Material.001"]}
                position={[68.179, 18.604, 37.726]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube019_Material003_0.geometry}
                material={materials["Material.003"]}
                position={[53.156, 73.11, -95]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[104.96, 111.702, 104.96]}
              />
              <mesh
                geometry={nodes.Cube013_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-79.154, 47.131, -22.837]}
                rotation={[-Math.PI / 2, 0, -0.226]}
                scale={100}
                castShadow
              />
              <mesh
                geometry={nodes.Cube020_Material006_0.geometry}
                material={materials["Material.006"]}
                position={[68.179, 34.7, 37.726]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[94.674, 97.393, 100.523]}
              />
              <mesh
                geometry={nodes.Cube021_Material003_0.geometry}
                material={materials["Material.003"]}
                position={[54.12, 132.01, -95]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[29.378, 1.216, 0.318]}
              />
              <mesh
                geometry={nodes.Cube022_Material007_0.geometry}
                material={materials["Material.007"]}
                position={[82.779, 9.304, -88.123]}
                rotation={[-1.375, 0, 0]}
                scale={[104.96, 111.702, 104.96]}
              />
              <group>
                {!isDesktopView ? (
                  <mesh
                    name={"monitorScreen"}
                    geometry={nodes.Cube023_Material008_0.geometry}
                    material={materials["Material.008"]}
                    position={[-78.785, 66.743, -22.837]}
                    rotation={[-Math.PI / 2, 0, -0.226]}
                    scale={[1.065, 14.113, 3.183]}
                    castShadow
                    onClick={(event) => {
                      event.stopPropagation();
                      onScreenClickAction();
                    }}
                    onPointerOver={() => {
                      document.body.style.cursor = "pointer";
                    }}
                    onPointerOut={() => {
                      document.body.style.cursor = "default";
                    }}
                  />
                ) : (
                  <>
                    <mesh
                      geometry={nodes.Cube023_Material008_0.geometry}
                      onPointerOver={() => {
                        document.body.style.cursor = "default";
                      }}
                      onPointerOut={() => {
                        document.body.style.cursor = "default";
                      }}
                    >
                      <Html
                        className="desktop-content"
                        rotation-x={-Math.PI / 39}
                        rotation-y={Math.PI / 2.34}
                        rotation-z={Math.PI / 40}
                        position={[-78, 67, -22.4]}
                        transform
                        occlude
                        style={{
                          cursor: "default",
                        }}
                      >
                        <div
                          className="desktop-wrapper cursor-default"
                          onPointerDown={(e) => e.stopPropagation()}
                        >
                          <RoomDesktopSection onCloseAction={onCloseAction} />
                        </div>
                      </Html>
                    </mesh>
                  </>
                )}
              </group>

              <mesh
                geometry={nodes.Cube024_Material_0.geometry}
                material={materials.Material}
                position={[-36.958, 32.254, -30.532]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[100, 100, 14.875]}
                receiveShadow
              />
              <mesh
                geometry={nodes.Cube026_Material004_0.geometry}
                material={materials["Material.004"]}
                position={[-3.577, 98.873, -81.111]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.491, 20.491, 20.491]}
              />
              <mesh
                geometry={nodes.Cube028_Material_0.geometry}
                material={materials.Material}
                position={[-39.092, 97.456, -78.779]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube011_Material004_0.geometry}
                material={materials["Material.004"]}
                position={[-74.17, 98.873, -81.111]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.491, 20.491, 20.491]}
              />
              <mesh
                geometry={nodes.Cube018_Material004_0.geometry}
                material={materials["Material.004"]}
                position={[-3.577, 74.02, -81.111]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.491, 20.491, 20.491]}
              />
              <mesh
                geometry={nodes.Cube025_Material_0.geometry}
                material={materials.Material}
                position={[-39.092, 72.602, -78.779]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={100}
              />
              <mesh
                geometry={nodes.Cube027_Material004_0.geometry}
                material={materials["Material.004"]}
                position={[-74.17, 74.02, -81.111]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[17.491, 20.491, 20.491]}
              />
              <mesh
                geometry={nodes.Circle001_Material010_0.geometry}
                material={materials["Material.010"]}
                position={[-76.355, 46.756, 80.494]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={4.892}
              />
              <mesh
                geometry={nodes.Cone__0.geometry}
                material={materials.Cone__0}
                position={[-75.43, 62.372, 77.449]}
                rotation={[-2.792, 0.243, 0.171]}
                scale={23.498}
              />
              <mesh
                geometry={nodes.Cone001__0.geometry}
                material={materials.Cone__0}
                position={[-73.048, 61.847, 80.746]}
                rotation={[-1.214, 1.336, -1.223]}
                scale={24.851}
              />
              <mesh
                geometry={nodes.Cone002__0.geometry}
                material={materials.Cone__0}
                position={[-75.176, 64.148, 81.48]}
                rotation={[-1.013, 0.487, -1.397]}
                scale={29.226}
              />
              <mesh
                geometry={nodes.Cone003__0.geometry}
                material={materials.Cone__0}
                position={[-77.649, 64.452, 80.656]}
                rotation={[-1.488, -0.393, -1.372]}
                scale={29.226}
              />
              <mesh
                geometry={nodes.Cone004__0.geometry}
                material={materials.Cone__0}
                position={[-76.392, 64.428, 79.118]}
                rotation={[-1.965, -0.077, -1.487]}
                scale={29.226}
              />
              <mesh
                geometry={nodes.Cone005__0.geometry}
                material={materials.Cone__0}
                position={[-79.012, 62.162, 78.509]}
                rotation={[-2.619, -0.834, -1.805]}
                scale={25.427}
              />
              <mesh
                geometry={nodes.Cone007__0.geometry}
                material={materials.Cone__0}
                position={[-77.456, 60.121, 77.125]}
                rotation={[-3.112, -0.257, -2.076]}
                scale={20.986}
              />
              <mesh
                geometry={nodes.Cone008__0.geometry}
                material={materials.Cone__0}
                position={[-79.815, 58.98, 80.64]}
                rotation={[1.017, -1.412, 2.159]}
                scale={17.986}
              />
              <mesh
                geometry={nodes.Cone010__0.geometry}
                material={materials.Cone__0}
                position={[-78.297, 61.408, 83.411]}
                rotation={[-0.246, -0.435, 0.769]}
                scale={22.915}
              />
              <mesh
                geometry={nodes.Cone011__0.geometry}
                material={materials.Cone__0}
                position={[-79.364, 62.207, 81.783]}
                rotation={[-0.944, -1.147, 0.23]}
                scale={27.127}
              />
              <mesh
                geometry={nodes.Cone006__0.geometry}
                material={materials.Cone__0}
                position={[-76.038, 63.07, 83.33]}
                rotation={[-0.476, 0.079, 0.727]}
                scale={29.226}
              />
              <mesh
                geometry={nodes.Cone009__0.geometry}
                material={materials.Cone__0}
                position={[-76.604, 59.21, 83.969]}
                rotation={[0.056, -0.084, 0.728]}
                scale={19.82}
              />
              <mesh
                geometry={nodes.Cone012__0.geometry}
                material={materials.Cone__0}
                position={[-74.17, 61.103, 83.278]}
                rotation={[-0.152, 0.659, 0.791]}
                scale={22.321}
              />
              <mesh
                geometry={nodes.Cone013__0.geometry}
                material={materials.Cone__0}
                position={[-73.237, 58.606, 81.999]}
                rotation={[0.308, 1.104, 0.425]}
                scale={19.508}
              />
              <mesh
                geometry={nodes.Cone014__0.geometry}
                material={materials.Cone__0}
                position={[-73.352, 60.333, 78.507]}
                rotation={[-3.077, 1.123, -2.446]}
                scale={23.653}
              />
              <mesh
                geometry={nodes.Cone015__0.geometry}
                material={materials.Cone__0}
                position={[-74.17, 63.516, 79.055]}
                rotation={[-2.133, 0.816, 3.032]}
                scale={29.226}
              />
              <mesh
                geometry={nodes.Cone016__0.geometry}
                material={materials.Cone__0}
                position={[-78.817, 57.687, 82.739]}
                rotation={[0.326, -0.879, 1.356]}
                scale={17.986}
              />
              <mesh
                geometry={nodes.Cone017__0.geometry}
                material={materials.Cone__0}
                position={[-74.675, 57.186, 83.207]}
                rotation={[0.286, 0.432, 1.344]}
                scale={17.986}
              />
              <mesh
                geometry={nodes.Cone018__0.geometry}
                material={materials.Cone__0}
                position={[-73.236, 58.099, 79.204]}
                rotation={[2.462, 1.245, -0.649]}
                scale={17.986}
              />
              <mesh
                geometry={nodes.Cone019__0.geometry}
                material={materials.Cone__0}
                position={[-75.997, 57.545, 77.3]}
                rotation={[2.94, 0.082, -2.096]}
                scale={20.986}
              />
              <mesh
                geometry={nodes.Cone020__0.geometry}
                material={materials.Cone__0}
                position={[-79.341, 58.419, 78.773]}
                rotation={[2.834, -1.104, -0.717]}
                scale={17.832}
              />
              <mesh
                geometry={nodes.Cube043_Material_0.geometry}
                material={materials.Material}
                position={[-68.749, 11.639, 13.071]}
                rotation={[-Math.PI / 2, 0, Math.PI / 2]}
                scale={[100, 100, 14.875]}
              />
              <mesh
                geometry={nodes.Cube048_Material018_0.geometry}
                material={materials["Material.018"]}
                position={[-61.906, 47.303, 5.604]}
                rotation={[-Math.PI / 2, 0, -0.134]}
                scale={[8.257, 8.257, 1.097]}
              />
              <mesh
                geometry={nodes.Cube049_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-62.506, 45.256, 4.543]}
                rotation={[-Math.PI / 2, 0, -1.895]}
                scale={[4.399, 4.399, 0.584]}
              />
              <mesh
                geometry={nodes.Cube050_Material_0.geometry}
                material={materials.Material}
                position={[-63.539, 48.958, 4.481]}
                rotation={[0, -0.324, -Math.PI / 2]}
                scale={[0.054, 0.054, 0.002]}
              />
              <mesh
                geometry={nodes.Circle002_Material020_0.geometry}
                material={materials["Material.020"]}
                position={[-60.3, 50.087, 9.735]}
                rotation={[-2.902, 0, 0]}
                scale={24.08}
              />
              <mesh
                geometry={nodes.Cube051_Material020_0.geometry}
                material={materials["Material.020"]}
                position={[28.395, 68.582, -76.014]}
                rotation={[-1.366, 0, 0]}
                scale={7.168}
              />
              <mesh
                geometry={nodes.Circle005_Material005_0.geometry}
                material={materials["Material.005"]}
                position={[-24.636, 47.106, -72.817]}
                rotation={[-Math.PI / 2, 0, -0.106]}
                scale={[5.247, 5.247, 6.938]}
              />
            </group>
          </group>
        </group>
      </Suspense>
    </Fragment>
  );
}

useGLTF.preload("/models/room.glb");
