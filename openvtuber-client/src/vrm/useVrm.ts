import { useEffect, useRef, useState } from 'react';
import { useThree } from '@react-three/fiber';
import { VRM } from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type UseVrmReturn = {
  vrm: VRM | undefined;
  loadVrm: (url: string) => void;
};

const useVrm = (): UseVrmReturn => {
  const { camera } = useThree();
  const { current: loader } = useRef(new GLTFLoader());
  const [vrm, setVrm] = useState<VRM>();

  const loadVrm = (url: string) => {
    loader.load(
      url,
      async (gltf) => {
        const vrm = await VRM.from(gltf);
        vrm.scene.rotation.y = Math.PI;
        setVrm(vrm);
      },
      (progress) =>
        console.log(
          'Loading model...',
          100.0 * (progress.loaded / progress.total),
          '%',
        ),

      (error) => console.error(error),
    );
  };

  // Look at camera
  useEffect(() => {
    if (!vrm || !vrm.lookAt) return;
    vrm.lookAt.target = camera;
  }, [camera, vrm]);

  return { vrm, loadVrm };
};

export default useVrm;
