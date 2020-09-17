import React , {useState} from 'react';
import './App.css';
import Slider from './Slider'
import Sidebar from './Sidebar.js'

const EDIT_OPTIONS = [
  {
    name: 'Brightness',
    property : 'brightness',
    value : 100,
    range : {
      min : 0,
      max : 200
    },
    unit: '%',
  },
  {
    name: 'Contrast',
    property : 'contrast',
    value : 100,
    range : {
      min : 0,
      max : 200
    },
    unit: '%',
  },
  {
    name: 'Grayscale',
    property : 'grayscale',
    value : 0,
    range : {
      min : 0,
      max : 100
    },
    unit: '%',
  },
  {
    name: 'Saturation',
    property : 'saturate',
    value : 100,
    range : {
      min : 0,
      max : 200
    },
    unit: '%',
  },
  {
    name: 'Sepia',
    property : 'sepia',
    value : 0,
    range : {
      min : 0,
      max : 100
    },
    unit: '%',
  },
  {
    name: 'Blur',
    property : 'blur',
    value : 0,
    range : {
      min : 0,
      max : 20
    },
    unit: 'px',
  },
  {
    name: 'Hue Rotate',
    property : 'hue-rotate',
    value : 0,
    range : {
      min : 0,
      max : 360
    },
    unit: 'deg',
  },
]


function App() {
  const [selectedIndex , setSelectedIndex] = useState(0)
  const [options , setOptions] = useState(EDIT_OPTIONS) 
  const selectedEffect = options[selectedIndex]

  function sliderChange ({target}) {
    setOptions(prevOptions => {
      return prevOptions.map ((option , index) => {
        if(index !== selectedIndex) return option
        return {...option, value: target.value}
      })
    })
  }

  function getImageStyle() {
    const filters = options.map(option => {
      return `${option.property}(${option.value}${option.unit})`
    })
    return{ filter: filters.join(' ')}
  }

  console.log(getImageStyle())
  
 
  return (
   <div className="outer-container">
     <div className="main-image" style={getImageStyle()}/>  
     <div className="sidebar">
      {options.map((option , index) => {
        return(
          <Sidebar
          key={index}
          name={option.name}
          active={index === selectedIndex}
          handleClick={() => setSelectedIndex(index)}
          />
        )
      })} 
       
     </div>
    <Slider 
    min = {selectedEffect.range.min}
    max = {selectedEffect.range.max}
    value= {selectedEffect.value}
    handleChange = {sliderChange}
    />
   </div>   
  );
}


export default App;
