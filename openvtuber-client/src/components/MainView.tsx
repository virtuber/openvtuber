import React, { useRef, FunctionComponent } from 'react';
import { Canvas } from 'react-three-fiber';
import VrmViewerImpl from '../vrm/VrmViewer';

const MainView: FunctionComponent = () => {
  type vrmViewerImplType = React.ElementRef<typeof VrmViewerImpl>;

  const vrmRef = useRef<vrmViewerImplType>(null);

  return (
    <>
      <label htmlFor="vrm-picker">Pick VRM model</label>
      <input
        type="file"
        accept=".vrm"
        id="vrm-picker"
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
