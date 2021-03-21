import React, { FunctionComponent, ReactNode } from 'react';
import './RightBarGridContainer.css';

type RightBarGridContainerProps = {
  children?: ReactNode;
};

const RightBarGridContainer: FunctionComponent<RightBarGridContainerProps> = ({
  children,
}: RightBarGridContainerProps) => {
  return <div className="right-bar-grid-container">{children}</div>;
};

export default RightBarGridContainer;
