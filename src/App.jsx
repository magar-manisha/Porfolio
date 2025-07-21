import React from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Service from './sections/Service'
import About from './sections/About'
import Contact from './sections/Contact'
import Work from './sections/Work'
import ReactLenis from 'lenis/react'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
      <NavBar />
      <Hero />
      <Service />
      <Work />
      <About />
      <Contact />
    </ReactLenis>
  )
}

export default App