import React, { FunctionComponent, useState, useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);
  ref.current?.addEventListener('kv-update', ((e: CustomEvent) => {
    // Handle config change here
    console.log(e.detail);
  }) as EventListener);
  return (
    <div className="rightbar" ref={ref}>
      <RightBarSwitch tab={tab} setTab={setTab} />
      {tab === 'Design' && (
        <RightBarSection name={t('rightbar.background')}>
          <BackgroundPicker />
          <RightBarGridContainer>
            <RightBarKVField type="number" label={'X'} fieldKey="x" />
            <RightBarKVField type="number" label={'Y'} fieldKey="y" />
          </RightBarGridContainer>
        </RightBarSection>
      )}
    </div>
  );
};

export default RightBar;
