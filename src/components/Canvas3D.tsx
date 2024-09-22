import { Canvas } from "@react-three/fiber";
import { Gameboy } from "./Gameboy";

export const Canvas3D = () => {
  return (
    <div className="min-h-[calc(80dvh-70px)] w-full relative">
      <Canvas>
        <Gameboy />
      </Canvas>
    </div>
  );
};
