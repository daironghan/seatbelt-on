import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      {value} 
    </div>
  );
};

export default DateTimeDisplay;
//delete