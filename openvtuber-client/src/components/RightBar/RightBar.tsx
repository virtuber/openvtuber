import React, { FunctionComponent, useState } from 'react';
import RightBarSwitch from './RightBarSwitch';
import BackgroundPicker from './BackgroundPicker';
import RightBarSection from './RightBarSection';
import './RightBar.css';

const RightBar: FunctionComponent = () => {
  const [tab, setTab] = useState('Design');
  return (
    <div className="rightbar">
      <RightBarSwitch tab={tab} setTab={setTab} />
      {tab === 'Design' && (
        <RightBarSection name={'Background'}>
          <BackgroundPicker />
        </RightBarSection>
      )}
    </div>
  );
};

export default RightBar;
