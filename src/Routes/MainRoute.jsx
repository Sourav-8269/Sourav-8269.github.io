import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'

const MainRoute = () => {
  return (
    <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/skills"  element={<Skills/>} />
        <Route path="/project" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default MainRoute