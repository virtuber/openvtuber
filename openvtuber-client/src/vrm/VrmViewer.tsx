import React, {
  useImperativeHandle,
  useState,
  forwardRef,
  Suspense,
  useLayoutEffect,
} from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import useVrm from './useVrm';
import Vrm from './Vrm';
import Stars from '../components/Stars';

type VrmViewerProps = {};
export type VrmViewerRefProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const VrmViewer = forwardRef<VrmViewerRefProps, VrmViewerProps>((_, ref) => {
  const { size, set } = useThree();
  const { vrm, loadVrm } = useVrm();

  useImperativeHandle(ref, () => ({
    handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const input = event.target;
      if (input.files && input.files.length) {
        const url = URL.createObjectURL(input.files[0]);
        loadVrm(url);
      }
    },
  }));
  const [perspectiveCameraRef, setPerspectiveCameraRef] =
    useState<THREE.PerspectiveCamera>(null!);
  useFrame(() => perspectiveCameraRef.updateMatrixWorld());
  useLayoutEffect(
    () => void set({ camera: perspectiveCameraRef }),
    [perspectiveCameraRef, set],
  );

  return (
    <>
      <perspectiveCamera
        ref={setPerspectiveCameraRef}
        aspect={size.width / size.height}
        focus={10}
        fov={50}
        position={[0, 1.25, 1]}
        onUpdate={(self) => self.updateProjectionMatrix()}
      />
      <ambientLight intensity={0.75} />
      <pointLight intensity={0.25} position={[100, 100, 10]} />
      <Stars />
      <Suspense fallback={null}>
        {vrm && vrm.scene && <Vrm vrm={vrm} />}
      </Suspense>
    </>
  );
});
VrmViewer.displayName = 'VrmViewer';

export default VrmViewer;
