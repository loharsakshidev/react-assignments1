import React, { useState } from 'react'

const ColorPicker = () => {
    const [color, setColor] = useState('Red')
  return (

    <div className='container'>
      <p className='mt-5'>Assignment No. 3</p>
    <h1>Color Picker</h1>
    <div className="colorChange mx-auto mb-4" style={{height:"50px", width:"200px", border:"1px solid black", backgroundColor:color}}>
        {color}
      
    </div>
    <button onClick={()=>setColor("Red")}>Red</button>
     <button onClick={()=>setColor("Blue")}>Blue</button>
      <button onClick={()=>setColor("Green")}>Green</button>
       <button onClick={()=>setColor("Yellow")}>Yellow</button>
    </div>
  )
}

export default ColorPicker
