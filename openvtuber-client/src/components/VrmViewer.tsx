import React, {
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  MutableRefObject,
  Suspense,
} from 'react';
import { useThree, useResource, useFrame, Camera } from 'react-three-fiber';
import useVrm from '../hooks/useVrm';
import Vrm from './Vrm';

type VrmViewerProps = {};
type VrmViewerRefProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const VrmViewer = forwardRef<VrmViewerRefProps, VrmViewerProps>((_, ref) => {
  const { aspect, setDefaultCamera } = useThree();
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

  const perspectiveRef = useResource() as MutableRefObject<Camera>;

  useLayoutEffect(() => void setDefaultCamera(perspectiveRef.current), [
    perspectiveRef,
    setDefaultCamera,
  ]);
  useFrame(() => perspectiveRef.current.updateMatrixWorld());

  return (
    <>
      <perspectiveCamera
        ref={perspectiveRef}
        aspect={aspect}
        fov={100}
        position={[0, 0.6, 4]}
        onUpdate={(self) => self.updateProjectionMatrix()}
      />
      <spotLight position={[0, 0, 50]} />
      <Suspense fallback={null}>
        {vrm && vrm.scene && <Vrm vrm={vrm} />}
      </Suspense>
    </>
  );
});

export default VrmViewer;
