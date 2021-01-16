import React, { FunctionComponent, RefObject } from 'react';
import type { VrmViewerRefProps } from '../../vrm/VrmViewer';
import Upload from './Upload';
import './NavBar.css';

type NavBarProps = {
  vrmRef: RefObject<VrmViewerRefProps>;
};
const NavBar: FunctionComponent<NavBarProps> = ({ vrmRef }: NavBarProps) => {
  return (
    <div className="navbar">
      <Upload
        className="navbar__upload"
        type="file"
        accept=".vrm"
        onChange={(e) => {
          vrmRef.current?.handleFileChange(e);
        }}
      />
    </div>
  );
};

export default NavBar;
