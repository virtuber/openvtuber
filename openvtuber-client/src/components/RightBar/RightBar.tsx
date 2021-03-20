import React, { FunctionComponent, useState } from 'react';
import RightBarSwitch from './RightBarSwitch';
import BackgroundPicker from './BackgroundPicker';
import RightBarSection from './RightBarSection';
import RightBarKVField from './RightBarKVField';
import RightBarGridContainer from './RightBarGridContainer';
import './RightBar.css';
import '../../i18n/config';
import { useTranslation } from 'react-i18next';

const RightBar: FunctionComponent = () => {
  const [tab, setTab] = useState('Design');
  const { t } = useTranslation();
  return (
    <div className="rightbar">
      <RightBarSwitch tab={tab} setTab={setTab} />
      {tab === 'Design' && (
        <RightBarSection name={t('rightbar.background')}>
          <BackgroundPicker />
          <RightBarGridContainer>
            <RightBarKVField type="number" label={'X'} />
            <RightBarKVField type="number" label={'Y'} />
          </RightBarGridContainer>
        </RightBarSection>
      )}
    </div>
  );
};

export default RightBar;
