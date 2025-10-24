import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const [value, setValue] = React.useState([1, 1500]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 250 }}>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
        min={1}
        max={1500}
        sx={{
            color:"#ff5252"
        }}
      />
      <p className='flex justify-between gap-4'>{
        value.map((val)=>(
            <div className=''>
                <p className='text-sm text-gray-700 font-[500]'>From ${val}</p>
            </div>
        ))
        }</p>
    </Box>
  );
}
