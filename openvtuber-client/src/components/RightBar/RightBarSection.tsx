import React, { FunctionComponent, ReactNode } from 'react';
import './RightBarSection.css';

type RightBarSectionProps = {
  name: string;
  children?: ReactNode;
};

const RightBarSection: FunctionComponent<RightBarSectionProps> = ({
  name,
  children,
}: RightBarSectionProps) => {
  return (
    <div className="rightbar-section">
      <div className="rightbar-section__title">{name}</div>
      {children}
    </div>
  );
};

export default RightBarSection;
