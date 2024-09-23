import { Canvas } from "@react-three/fiber";
import { Gameboy } from "./Gameboy";

export const Canvas3D = () => {
  return (
    <div className="h-full w-full fixed top-0 left-0 z-0">
      <Canvas>
        <Gameboy />
      </Canvas>
    </div>
  );
};
