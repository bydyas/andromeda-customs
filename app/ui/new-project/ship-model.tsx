'use client';

import { Suspense, useEffect } from 'react';
import { useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface IShipModel {
  dirName: string;
}

export default function ShipModel({ dirName }: IShipModel) {
  const fullPathname = `/models/${dirName}/scene.gltf`;
  const ship = useLoader(GLTFLoader, fullPathname);
  const scene = useThree((state) => state.scene);

  useEffect(() => {
    scene.traverse((object) => {
      if (object.name === 'UpperCanon') {
        console.log(object);
        object.visible = false;
      }
    });
  }, [scene]);

  return (
    <Suspense fallback={null}>
      <primitive object={ship.scene} />;
    </Suspense>
  );
}
