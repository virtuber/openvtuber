import React, { useRef, FunctionComponent } from 'react';
import { Canvas } from 'react-three-fiber';
import VrmViewerImpl from '../vrm/VrmViewer';
import NavBar from './NavBar';

const MainView: FunctionComponent = () => {
  type vrmViewerImplType = React.ElementRef<typeof VrmViewerImpl>;

  const vrmRef = useRef<vrmViewerImplType>(null);

  return (
    <>
      <NavBar vrmRef={vrmRef} />
      <Canvas>
        <VrmViewerImpl ref={vrmRef} />
      </Canvas>
    </>
  );
};

export default MainView;
