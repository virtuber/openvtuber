import React, { FunctionComponent } from 'react';
import { Vector3 } from 'three';
type LightProps = {
  brightness: number;
  color: string;
};

export const KeyLight: FunctionComponent<LightProps> = ({
  brightness,
  color,
}: LightProps) => {
  return (
    <rectAreaLight
      intensity={brightness}
      position={[-2, 0, 5]}
      width={3}
      height={3}
      color={color}
      onUpdate={(self) => self.lookAt(new Vector3(0, 0, 0))}
    />
  );
};
export const FillLight: FunctionComponent<LightProps> = ({
  brightness,
  color,
}: LightProps) => {
  const v = new Vector3(0, 0, 0);
  return (
    <rectAreaLight
      intensity={brightness}
      position={[2, 1, 4]}
      width={3}
      height={3}
      color={color}
      onUpdate={(self) => self.lookAt(new Vector3(0, 0, 0))}
    />
  );
};

export const RimLight: FunctionComponent<LightProps> = ({
  brightness,
  color,
}: LightProps) => {
  return (
    <rectAreaLight
      intensity={brightness}
      position={[1, 4, -2]}
      width={2}
      height={2}
      rotation={[0, 180, 0]}
      color={color}
    />
  );
};
