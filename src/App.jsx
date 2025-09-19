import React from 'react'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='bg-zinc-800 text-zinc-100 w-screen min-h-screen'>
      <main className='max-w-[1100px] h-screen mx-auto my-0'>
        <Navbar />
      </main>
    </div>
  )
}

export default App
