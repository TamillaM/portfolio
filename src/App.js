import React from 'react'
import { About, Navbar, Experience, Contact, Projects, Header, Footer, Certificate } from './components/imports'
import './App.css'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Experience />
      <Projects />
      <Certificate />
      <Contact />
      <Footer />
    </div>
  )
}

export default App