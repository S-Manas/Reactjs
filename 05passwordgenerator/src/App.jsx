import { use, useState,useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length,setlength] = useState(8)
  const [number,numallowed] = useState(false)
  const [symbol,symbolallowed] = useState(false)
  const [password,passallowed] = useState("")
  //useRef hook
  const passwordref = useRef(null)
  const copypassword = useCallback(()=>{
    passwordref.current?.select()
    passwordref.current?.setSelectionRange(0,9999)
    window.navigator.clipboard.writeText(password)
  },[password])
  const generatepassword = useCallback(()=>{
    let pass = ""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number) str +="0123456789"
    if(symbol) str +="!@#$%^&*()_+"
    for(let i=0;i<length;i++){
      let index = Math.floor(Math.random()*str.length)
      pass += str.charAt(index)
    }
    passallowed(pass)
  },[length,number,symbol,passallowed]) 
  useEffect(()=>{
    generatepassword()
  },[length,number,symbol,generatepassword]) 

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className="flext shadow rounded-lg overflow-hidden
        mb-4 bg-white ">
          <input
          type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordref}
          /></div>
          <button 
          onClick={copypassword}

          className="outline-none bg-blue-700 text-white px-3 rounded-lg py-0.5 shrink-0 ">copy</button>
          <div>
            <div>
              <input 
              type="range" 
              min={6}
              max={20}
              value={length}
              className="cursor-pointer "
              onChange={(e)=>setlength(e.target.value)}
              />
              <label className='  ml-2'>length:{length}</label>
            </div>
            <div>
              <input type="checkbox"
              defaultChecked={number}
              id="number"
              onChange={()=>{
              numallowed(prev=>!prev);}}
              />
              <label htmlFor="number" className='ml-2 text-white'>Numbers</label>
              
              <input type="checkbox"
              defaultChecked={symbol}
              id="symbol"
              onChange={()=>{
              symbolallowed(prev=>!prev);
            }}
              />
              <label htmlFor="symbol" className='ml-2 my-2 text-white'>Symbols</label>
           
            </div>
            
          </div>
        
      </div>
    </>
  )
}

export default App
