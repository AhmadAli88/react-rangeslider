// App.jsx
import  { useState } from 'react';
import RangeSlider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'; // Import the default styles

const Basic = () => {
  const [value, setValue] = useState(50);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div>
      <h1>React Rangeslider Example</h1>
      <RangeSlider
        min={0}
        max={100}
        step={1}
        value={value}
        onChange={handleChange}
        tooltip="always"
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default Basic;
