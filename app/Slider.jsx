import React from 'react';

const Slider = ({ value, slide }) => {
  console.log('Slider ');
  const update = event => {
    slide(Math.ceil((event.target.value * 255) / 100));
  };

  const position = (value * 100) / 255;
  return (
    <input
      type='range'
      style={{ margin: '10px', cursor: 'pointer' }}
      value={position}
      onChange={update}
    ></input>
  );
};

export default React.memo(Slider);
