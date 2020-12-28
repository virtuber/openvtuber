import React, { useRef, FunctionComponent } from 'react';
import { Canvas } from 'react-three-fiber';
import VrmViewerImpl from './VrmViewer';

const MainView: FunctionComponent = () => {
  type vrmViewerImplType = React.ElementRef<typeof VrmViewerImpl>;

  const vrmRef = useRef<vrmViewerImplType>(null);

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

export default MainView;
