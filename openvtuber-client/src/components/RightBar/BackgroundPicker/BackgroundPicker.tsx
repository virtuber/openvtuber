import React, { FunctionComponent } from 'react';
import EyeIcon from './EyeIcon';
import './BackgroundPicker.css';

const BackgroundPicker: FunctionComponent = () => {
  return (
    <div className="background-picker">
      <div className="background-picker__left-container">
        <div className="background-picker__box-container">
          <div className="background-picker__box">
            <div className="background-picker__checkered-background" />
          </div>
        </div>
        <input
          className="background-picker__text-input"
          spellCheck="false"
          autoComplete="off"
        />
        <label>
          <input
            className="background-picker__alpha-input"
            spellCheck="false"
            autoComplete="off"
          />
        </label>
      </div>
      <div className="background-picker__icon-container">
        <span className="background-picker__svg-container">
          <EyeIcon />
        </span>
      </div>
    </div>
  );
};

export default BackgroundPicker;
