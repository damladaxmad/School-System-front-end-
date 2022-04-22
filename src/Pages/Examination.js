import React, { useState } from 'react';
import TimePicker from 'react-time-picker';
import './Examination.css'


const Examination = () => {
  const [value, setValue] = useState('10:00');

  const changeHandler = (e) => {
    setValue(e)
  }

  console.log(value)

  return (
    <div>
       <TimePicker onChange={(e)=> changeHandler(e)} value={value}
      className = "timePicker"
       />
    </div>
  );
};

export default Examination