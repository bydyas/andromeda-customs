'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import ShipModel from './ship-model';

export default function Scene({ modelDir }: { modelDir: string }) {
  return (
    <div className="flex h-[calc(100vh_-_104px_-_64px)] items-center justify-center">
      <Canvas
        className="h-2xl w-2xl"
        camera={{ fov: 75, near: 0.1, far: 50, position: [5, 3, 7] }}
      >
        <OrbitControls enablePan={false} />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ShipModel dir={modelDir} />
      </Canvas>
    </div>
  );
}
