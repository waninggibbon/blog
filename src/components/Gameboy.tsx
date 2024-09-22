import { useRef } from "react";
import { useGLTF, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Group, Mesh } from "three";

export const Gameboy = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF("/gameboy_model.glb");

  const gameBoyRef = useRef<Group>(null!);

  useFrame(() => {
    gameBoyRef.current.rotation.y += 0.005;
    gameBoyRef.current.position;
  });

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.001}>
        <group rotation={[Math.PI / 2, 0, 0]} ref={gameBoyRef}>
          <mesh
            geometry={(nodes.buttons_Gameboy_0 as Mesh).geometry}
            material={materials.Gameboy}
            position={[-804.48, -701.515, 398.666]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={(nodes.gameboy_Gameboy_0 as Mesh).geometry}
            material={materials["Gameboy.001"]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
      <ambientLight />
      <OrbitControls enableZoom={false} />
    </group>
  );
};

useGLTF.preload("/gameboy_model.glb");
