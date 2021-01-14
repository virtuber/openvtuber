import React, {
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  MutableRefObject,
  Suspense,
} from 'react';
import { useThree, useResource, useFrame, Camera } from 'react-three-fiber';
import useVrm from './useVrm';
import Vrm from './Vrm';
import Stars from '../components/Stars';

type VrmViewerProps = {};
export type VrmViewerRefProps = {
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
