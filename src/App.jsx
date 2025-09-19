import React from 'react'
import ExhibitionCarousel from './components/ExhibitionCarousel'
import HeroSection from './components/HeroSection'
import BottomNavbar from './components/BottomNavbar'
import curve from "./images/curve.svg"
import AboutSection from './components/About'
import DarkFooter from './components/Footer'



const App = () => {
  return (
    <div className='bg-black text-zinc-100 w-full min-h-screen overflow-x-hidden'>
      <main className='max-w-full  mx-auto my-0 px-30 relative'>

        <HeroSection />
        <ExhibitionCarousel/>
        <BottomNavbar/>
        <AboutSection/>
        <img src={curve} alt="" className='absolute top-0 scale-75 opacity-15 blur-lg -right-200 bottom-0 z-0'/>
        <img src={curve} alt="" className='absolute top-50% scale-75 opacity-15 blur-lg rotate-180 -left-200 bottom-0 z-0'/>
        <DarkFooter/>
      </main>
    </div>
  )
}

export default App
