import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(15)
  //let counter =15
  const addvalue=()=>{
    //console.log("clicked",Math.random());
    //counter=counter+1
    if(counter<20){
      // setCounter(counter+1)
      // setCounter(counter+2)
      // setCounter(counter+3)
      // setCounter(counter+4)
      // setCounter(counter+5) 
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
      setCounter(prevCounter=>prevCounter+1)
    }
  }
  const removevalue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }
    return (
    <>
    <h1>manas</h1>
    <h1>you are a boy</h1>
    <h1>counter:{counter}</h1>
    <button onClick={addvalue}>add value</button><br></br>
    <button onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
