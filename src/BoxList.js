import React, { useState } from 'react';
import './BoxList.css';
import Box from './Box';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);
  const addBoxToList = ({ backgroundColor, width, height, id }) => {
    console.log('ADDED');
    setBoxes((boxes) => [...boxes, { backgroundColor, width, height, id }]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="boxList-container">
      <NewBoxForm addBoxToList={addBoxToList} />
      <div className="boxList">
        {boxes.map((box) => {
          console.log(box);
          return (
            <Box
              key={box.id}
              backgroundColor={box.backgroundColor}
              height={box.height}
              width={box.width}
              id={box.id}
              removeBox={removeBox}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoxList;
