import './index.css'
import { useState } from "react"




function App() {

  const [color, setColor]=useState("black")
  return (
      <main className="w-full h-screen duration-200"
       style={{backgroundColor:color}}>

        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>

            <button onClick={()=>setColor("red")}className='px-3 rounded-full text-white'
            style={{backgroundColor:"red"}}>
            Red</button> 
            
            <button onClick={()=>setColor("blue")}className='px-3 rounded-full text-white'
            style={{backgroundColor:"blue"}}>
            blue</button>

            <button onClick={()=>setColor("green")}className='px-3 rounded-full text-white'
            style={{backgroundColor:"green"}}>
            green</button>

            <button onClick={()=>setColor("orange")}className='px-3 rounded-full text-white'
            style={{backgroundColor:"orange"}}>
            orange</button>

          </div>
       
        </div>
      </main>
  )
}

export default App
