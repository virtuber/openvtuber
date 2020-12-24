import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useImperativeHandle,
  forwardRef,
  FunctionComponent,
  MutableRefObject,
} from 'react';
import {
  useThree,
  useResource,
  useFrame,
  Canvas,
  Camera,
} from 'react-three-fiber';
import THREEVRM from '@pixiv/three-vrm';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

type UseVrmReturn = {
  vrm: THREEVRM.VRM | undefined;
  loadVrm: Function;
};

const useVrm = (): UseVrmReturn => {
  const { camera } = useThree();
  const { current: loader } = useRef(new GLTFLoader());
  const [vrm, setVrm] = useState<THREEVRM.VRM>();

  const loadVrm = (url: string) => {
    loader.load(
      url,
      async (gltf) => {
        const vrm = await THREEVRM.VRM.from(gltf);
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

type VrmViewerImplProps = {};
type VrmViewerImplRefProps = {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
const VrmViewerImpl = forwardRef<VrmViewerImplRefProps, VrmViewerImplProps>(
  (_, ref) => {
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
        {vrm && vrm.scene && <primitive object={vrm.scene} />}
      </>
    );
  },
);

const VrmViewer: FunctionComponent = () => {
  type vrmViewerImplType = React.ElementRef<typeof VrmViewerImpl>;

  const vrmRef = useRef<vrmViewerImplType>(null);
  useEffect(() => {
    console.log(vrmRef.current);
  }, []);

  return (
    <>
      <input
        type="file"
        accept=".vrm"
        onChange={(e) => {
          vrmRef.current?.handleFileChange(e);
        }}
      />
      <Canvas>
        <VrmViewerImpl ref={vrmRef} />
      </Canvas>
    </>
  );
};
export default VrmViewer;
