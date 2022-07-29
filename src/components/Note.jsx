import React, { useState } from 'react'
import notes from '../notes'

export default function Note(props) {

  const [heading, setHeading] = useState("");
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [name, setName] = useState("") 

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut(){
    setIsMouseOver(false)
  }

  function setHeadingText(){
    setHeading(name)
  }

  function handleChange(event) {
    setName(event.target.value)
  }

  

  return (
    <div className='note'>
        <h1>{heading}</h1>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <input onChange={handleChange} type="text" placeholder="Enter heading" value={name} />
        <button onClick={setHeadingText} style={{backgroundColor: isMouseOver ? "green" : "#459a47"}} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  )
}
