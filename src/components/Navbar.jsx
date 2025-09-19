import React from 'react'

const Navbar = () => {
  return (
    <header className='flex items-center justify-between rounded-full px-4 py-4 '>
        <div className="logo">
            <div className="icons"></div>
            <h1 className='text-xl font-bold'>AETHERIUM GALLARY</h1>
        </div>
            <ul className='flex items-center justify-center gap-6'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Exhibition</a></li>
                <li><a href="#">Collection</a></li>
                <li><a href="#">Artists</a></li>
                <li><a href="#">Artists</a></li>
            </ul>
            <div className="btn">
                <button className='bg-blue-500 rounded-full px-4 py-2'>Support US</button>
            </div>
    </header>
  )
}

export default Navbar;
