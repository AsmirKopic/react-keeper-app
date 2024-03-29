import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

export default function InputArea(props) {

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [isExpanded, setIsExpanded] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    function submitNote(event) {
        event.preventDefault();
        props.onAdd(note);

        setNote({
            title: "",
            content: ""
        });

        setIsExpanded(false);
    }

    function expandArea() {
        setIsExpanded(true);
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input onChange={handleChange} name="title" value={note.title} placeholder='Title' />}
                <textarea onClick={expandArea}
                    onChange={handleChange}
                    name='content'
                    value={note.content}
                    placeholder='Take a note..'
                    rows={isExpanded ? 3 : 1} />
                <Zoom in={isExpanded}>
                    <Fab onClick={submitNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    )
}