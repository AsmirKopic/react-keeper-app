import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';

export default function InputArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setNote(prevNote => {
            return {
                ...prevNote, 
                [name]: value
            };
        });
    }

    function submitNote(event){
        event.preventDefault();
        props.onAdd(note);

        setNote({
            title: "",
            content:""
        })
    }

    return (
        <div>
            <form className="create-note">
                <input onChange={handleChange} name="title" value={note.title} placeholder='Title'/>
                <textarea onChange={handleChange} name='content' value={note.content} placeholder='Take a note..' rows={3} />
                <Fab onClick={submitNote}><AddIcon /></Fab>
            </form>
        </div>
    )
}