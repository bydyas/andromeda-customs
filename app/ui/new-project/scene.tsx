'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';
import ShipModel from './ship-model';

export default function Scene({ modelDirName }: { modelDirName: string }) {
  return (
    <div className="flex h-[calc(100vh_-_104px_-_170px)] items-center justify-center">
      <Canvas
        className="h-2xl w-[100%]"
        camera={{ fov: 75, near: 0.1, far: 50, position: [5, 3, 7] }}
      >
        <Environment preset="studio" />
        <OrbitControls makeDefault enablePan={false} />
        <ShipModel dirName={modelDirName} />
      </Canvas>
    </div>
  );
}
