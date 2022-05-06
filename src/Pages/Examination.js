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
    <div
    style={{
      height: "100%",
      width: "95%",
      margin: "0px auto",
      display: "flex",
      gap: "14px",
      flexDirection: "column",
    }}
  >
    <h2> Examination</h2>
    </div>
  );
};

export default Examination