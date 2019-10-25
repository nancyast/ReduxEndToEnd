import React from 'react';

const ColorBlock = ({ r, g, b }) => {
  return (
    <div
      className='color-block'
      style={{
        backgroundColor: `rgb(${r},${g},${b})`
      }}
    ></div>
  );
};

export default React.memo(ColorBlock);
