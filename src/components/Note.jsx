import React, { useState } from 'react'
import { Prev } from 'react-bootstrap/esm/PageItem';
import notes from '../notes'

export default function Note(props) {

  return (
    <div className='note'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
    </div>
  )
}
