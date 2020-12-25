import React, { useMemo } from 'react';
const Stars = ({ count = 5000 }) => {
  const positions = useMemo(() => {
    let positions = [];
    for (let i = 0; i < count; i++) {
      positions.push(
        (50 + Math.random() * 1000) * (Math.round(Math.random()) ? -1 : 1),
      );
      positions.push(
        (50 + Math.random() * 1000) * (Math.round(Math.random()) ? -1 : 1),
      );
      positions.push(
        (50 + Math.random() * 1000) * (Math.round(Math.random()) ? -1 : 1),
      );
    }
    return new Float32Array(positions);
  }, [count]);

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={2}
        sizeAttenuation
        color="white"
        transparent
        opacity={0.8}
        fog={false}
      />
    </points>
  );
};
export default Stars;
