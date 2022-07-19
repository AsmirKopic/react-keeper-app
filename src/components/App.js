import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {

  //count const useState ==> Deconstructing
  const [count, setCount] = useState(0);

  // function to increase variable
  function increase() {
    setCount(count + 1)
  }

  function decrese() {
    setCount(count - 1)
  }

  let time = new Date().toLocaleTimeString();
  const [timeNow, setTimeNow] = useState(time);

  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setTimeNow(newTime);
    console.log(newTime);
  }

  //setInterval(updateTime, 10000);

  return (
    <div>
      <Header />
      {notes.map(note => (
        <Note key={note.key} title={note.title} content={note.content} />
      ))}
      
    
      {/* Testing react hooks */}
      <div>
        <h1>{count}</h1>
        <button onClick={decrese}>-</button>
        <button onClick={increase}>+</button>
        <h1>{timeNow}</h1>
      </div>
      
      <Footer />

    </div>
  )
}
export default App;
