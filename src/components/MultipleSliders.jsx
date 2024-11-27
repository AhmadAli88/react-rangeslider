import  { useState } from 'react';
import RangeSlider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';

const MultipleSlider = () => {
  const [minValue, setMinValue] = useState(25);
  const [maxValue, setMaxValue] = useState(75);

  const handleMinChange = (value) => {
    setMinValue(value);
  };

  const handleMaxChange = (value) => {
    setMaxValue(value);
  };

  return (
    <div>
      <h1>Multiple Range Sliders</h1>
      <div>
        <h2>Min Value</h2>
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={minValue}
          onChange={handleMinChange}
        />
        <p>Min Value: {minValue}</p>
      </div>
      <div>
        <h2>Max Value</h2>
        <RangeSlider
          min={0}
          max={100}
          step={1}
          value={maxValue}
          onChange={handleMaxChange}
        />
        <p>Max Value: {maxValue}</p>
      </div>
    </div>
  );
};

export default MultipleSlider;
