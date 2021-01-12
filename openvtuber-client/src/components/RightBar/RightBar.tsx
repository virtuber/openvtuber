import React, { FunctionComponent, useState } from 'react';
import RightBarSwitch from './RightBarSwitch';
import './RightBar.css';

const RightBar: FunctionComponent = () => {
  const [tab, setTab] = useState('Design');
  return (
    <div className="rightbar">
      <RightBarSwitch tab={tab} setTab={setTab} />
    </div>
  );
};

export default RightBar;
