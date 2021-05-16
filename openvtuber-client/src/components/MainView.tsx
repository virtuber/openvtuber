import React, { useRef, FunctionComponent } from 'react';
import { Canvas } from '@react-three/fiber';
import VrmViewerImpl from '../vrm/VrmViewer';
import NavBar from './NavBar';
import RightBar from './RightBar';
import './MainView.css';

const MainView: FunctionComponent = () => {
  type vrmViewerImplType = React.ElementRef<typeof VrmViewerImpl>;

  const vrmRef = useRef<vrmViewerImplType>(null);

  return (
    <div className="mainview">
      <NavBar vrmRef={vrmRef} />
      <div className="mainview__content">
        <Canvas className="mainview__canvas">
          <VrmViewerImpl ref={vrmRef} />
        </Canvas>
        <RightBar />
      </div>
    </div>
  );
};

export default MainView;
