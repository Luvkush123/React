import { useState } from 'react'
import './App.css'

function App(){
  // let counter =15;
  const [counter , setCounter]= useState(15)

  const addValue = () => {
    // setCounter(counter+1)
    setCounter((counter) => counter+1) // to make use of each code whether is same or diff we use "()" and and fat arrow funtions
    setCounter((counter) => counter+1)
  }
  const removevalue = () => {
    setCounter(counter-1)
  }
 
  return (
    <>
    <h1>This is Luvkush First React Project</h1>
    <h2>counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value </button>{" "}

    <button onClick={removevalue} >Remove value
    </button>
    <p>footer: {counter}</p>

    </>
  )
}

export default App
