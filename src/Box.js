import React from 'react';
import './Box.css';

const Box = ({
  removeBox,
  id,
  backgroundColor = 'blue',
  height = 100,
  width = 100,
}) => {
  console.log(backgroundColor);
  const handleRemove = () => removeBox(id);
  return (
    <div className="box-container">
      <div
        style={{
          backgroundColor: backgroundColor,
          height: `${height}px`,
          width: `${width}px`,
        }}
      ></div>
      <button className="box-removeBtn" onClick={handleRemove}>
        Remove Box!
      </button>
    </div>
  );
};

export default Box;
