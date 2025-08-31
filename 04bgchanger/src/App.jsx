import { useState } from 'react'

function App() {
  const [color,setColor] = useState("grey");

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>
      <h1 className='text-3xl font-serif text-center pt-10'>
        Manas changes color like this
      </h1>
      <div className='fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg
         bg-white px-3 py-2 rounded-3xl'>
         <button onClick={()=>setColor("red")}
         className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"red"}}>red
         </button>
          <button onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"green"}}>green
         </button>
          <button onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"blue"}}>blue
         </button>
          <button onClick={()=>setColor("olive")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"olive"}}>olive
         </button>
          <button onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full
           shadow-lg'
         style={{backgroundColor:"pink"}}>pink
         </button>
          <button onClick={()=>setColor("khaki")}
          className='outline-none px-4 py-1 rounded-full
           shadow-lg'
         style={{backgroundColor:"khaki"}}>khaki
         </button>
          
          <button onClick={()=>setColor("indigo")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"indigo"}}>indigo
         </button>
          <button onClick={()=>setColor("coral")}
          className='outline-none px-4 py-1 rounded-full
          text-white shadow-lg'
         style={{backgroundColor:"coral"}}>coral
         </button>
          <button onClick={()=>setColor("aqua")}
          className='outline-none px-4 py-1 rounded-full
          text-black shadow-lg'
         style={{backgroundColor:"aqua"}}>aqua
         </button>


         </div>
      </div>

    </div>
    </>
  )
}

export default App
