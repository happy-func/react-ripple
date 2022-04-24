import React from 'react';
import Ripple from 'react-ripple';
import 'react-ripple/es/style';

const ButtonStyle = {
  padding: `12px 36px`,
  color: `#fff`,
  fontSize: 18,
  background: `linear-gradient(90deg, #0162c8, #55e7fc)`,
  borderRadius: 40,
};

export default () => {
  return (
    <div>
      <Ripple>
        <div style={ButtonStyle}>React Ripple Button</div>
      </Ripple>
    </div>
  );
};
