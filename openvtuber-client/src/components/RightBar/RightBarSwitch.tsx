import React, { FunctionComponent, Dispatch, SetStateAction } from 'react';
import './RightBar.css';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();
  return (
    <div className="rightbar__switch">
      <div
        className={`rightbar__switch__text ${
          tab === 'Design' ? SELECTED : UNSELECTED
        }`}
        onClick={() => setTab('Design')}
      >
        {t('rightbar.design')}
      </div>
      <div
        className={`rightbar__switch__text ${
          tab === 'Settings' ? SELECTED : UNSELECTED
        }`}
        onClick={() => setTab('Settings')}
      >
        {t('rightbar.settings')}
      </div>
    </div>
  );
};

export default RightBarSwitch;
