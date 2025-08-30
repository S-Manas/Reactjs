import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './ris.jpg'
import Card from './component/card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let myobj = {
        usr: 'Manas',
        age: 20
    }

  return (
    <>
    <h1 className ='bg-blue-300 text-black p-4 rounded-xl'>Nature</h1>
     {/* <div class="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl"> <div>
      <img class="size-48 shadow-xl rounded-md" alt="" src={logo}/>  </div>  
      <div class="flex items-center md:items-start">    
      <span class="text-2xl font-medium">Class Warfare</span>    
      <span class="font-medium text-sky-500">The Anti-Patterns</span>    
      <span class="flex gap-2 font-medium text-gray-600 dark:text-gray-400">      
    <span>No. 4</span><span>·</span><span>2025</span></span></div></div>
     */}
      <Card channel='Manas'/>
      <Card channel="Badal" tunnel={[1,2,3,4]} obj ={myobj} />

     

      

    </> 
  )
}

export default App
