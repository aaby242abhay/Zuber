import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style = {{display : "flex", justifyContent : "space-around"}}>
        <div style = {{backgroundColor: "red"}}>Hii</div>
        <div style = {{backgroundColor: "blue"}}>Hii</div>
        <div style = {{backgroundColor: "pink"}}>Hii</div>
      </div>
      <div className='flex justify-center'>
        <div className='bg-red-500 '>Hii</div>
        <div className='bg-yellow-500'>Hii</div>
        <div className='bg-pink-500'>Hii</div>
      </div>

      <div className='flex '>
        <div className='bg-red-500 w-[30%]'>Hii</div>
        <div className='bg-yellow-500 w-[30%]'>Hii</div>
        <div className='bg-pink-500 w-[30%]'>Hii</div>
      </div>

      <div className='grid grid-cols-12'>
        <div className='bg-red-500 col-span-4'>Hii</div>
        <div className='bg-yellow-500 col-span-4'>Hii</div>
        <div className='bg-pink-500 col-span-2'>Hii</div>
      </div>
    </>
  )
}

export default App
