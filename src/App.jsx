import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const App = () => {
  const computerModel = useGLTF("/desktop_pc/scene.gltf");
  return (
    <>
      <Canvas camera={{ position: [30, 0, 25], fov: 20 }}>
        <ambientLight intensity={1} />
        {/* <hemisphereLight args={[0xffffbb, 0x080820, 1]} />/ */}
        {/* <directionalLight color="red" position={[0, 5, 5]} /> */}
        <mesh>
          <primitive object={computerModel.scene} />
          {/* <sphereGeometry args={[, 64, 32]} />
          <meshStandardMaterial color={"red"} roughness={0} /> */}
        </mesh>
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
