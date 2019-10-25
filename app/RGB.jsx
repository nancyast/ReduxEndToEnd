import React, { useState } from 'react';
import BlockColor from './ColorBlock';
import Slider from './Slider';

const RGB = props => {
  const [rgb, setrgb] = useState({ r: 244, g: 158, b: 66 });
  const updateRgb = type => value =>
    setrgb(state => ({ ...state, [type]: value }));

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <BlockColor {...rgb} />
      <Slider value={rgb.r} slide={updateRgb('r')} />
      <Slider value={rgb.g} slide={updateRgb('g')} />
      <Slider value={rgb.b} slide={updateRgb('b')} />
    </div>
  );
};

export default RGB;
