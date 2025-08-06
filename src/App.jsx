import React from 'react'
import NavBar from './components/NavBar'
import Hero from './sections/Hero'
import Service from './sections/Service'
import About from './sections/About'
import Contact from './sections/Contact'
import Work from './sections/Work'
import ReactLenis from 'lenis/react'
import Footer from './components/footer'

const App = () => {
  return (
    <ReactLenis root className='relative w-screen min-h-screen'>
      <NavBar />
      <Hero />
      <Service />
      <Work />
      <About />
      <Contact />
      <Footer />
    </ReactLenis>
  )
}

export default App