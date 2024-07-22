'use client';

import { useRef } from 'react';
import { useLoader } from '@react-three/fiber';
// @ts-ignore
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Mesh } from 'three';

interface IShipModel {
  dir: string;
  type?: 'gltf' | 'glb';
}

export default function ShipModel({ dir, type = 'gltf' }: IShipModel) {
  const fileUrl = `/models/${dir}/scene.${type}`;
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}
