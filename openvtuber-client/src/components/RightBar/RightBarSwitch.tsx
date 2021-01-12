import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import './RightBar.css';

type RightBarSwitchProps = {
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

const RightBarSwitch: FunctionComponent<RightBarSwitchProps> = ({
  tab,
  setTab,
}: RightBarSwitchProps) => {
  const SELECTED = 'rightbar__switch__text-selected';
  const UNSELECTED = '';
  return (
    <div className="rightbar__switch">
      <div
        className={`rightbar__switch__text ${
          tab === 'Design' ? SELECTED : UNSELECTED
        }`}
        onClick={() => setTab('Design')}
      >
        Design
      </div>
      <div
        className={`rightbar__switch__text ${
          tab === 'Settings' ? SELECTED : UNSELECTED
        }`}
        onClick={() => setTab('Settings')}
      >
        Settings
      </div>
    </div>
  );
};

export default RightBarSwitch;
