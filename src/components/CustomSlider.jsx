import  { useState } from 'react';
import RangeSlider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css'; // Import the default styles

const CustomSlider = () => {
  const [value, setValue] = useState(50);

  const handleChange = (value) => {
    setValue(value);
  };

  return (
    <div className='parent-custom-slider'>
      <h1>Custom Styled Slider</h1>
      <RangeSlider
        min={0}
        max={100}
        step={5}
        value={value}
        onChange={handleChange}
        tooltip="hover"
         className="custom-slider"
       
      />
      <p>Value: {value}</p>
    </div>
  );
};

export default CustomSlider;
