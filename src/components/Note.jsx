import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import notes from '../notes'

export default function Note(props) {

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  })

  function handleMouseOver() {
    setIsMouseOver(true)
  }

  function handleMouseOut(){
    setIsMouseOver(false)
  }

  function handleChange(event) {
    
    const value = event.target.value;
    const name = event.target.name;
    
    setContact({
      ...contact,
      [name]: value
    });

  }


  // function handleChange(evt: any) {
  //   const value =
  //     evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
  //   setState({
  //     ...state,
  //     [evt.target.name]: value
  //   });
  // }
  
  



  return (
    <div className='note'>
        <h1>Hello {contact.fName} {contact.lName}</h1>
        <h3>{contact.email}</h3>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        <input onChange={handleChange} type="text" placeholder="Enter first name" name="fName" />
        <input onChange={handleChange} type="text" placeholder="Enter last name" name='lName' />
        <input onChange={handleChange} type="text" placeholder="Enter email" name='email' />



        <button style={{backgroundColor: isMouseOver ? "green" : "#459a47"}} onMouseEnter={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
    </div>
  )
}
