import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div display="flex"justify-Content="space-between" >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
    </div>
  )
}

export default Navbar