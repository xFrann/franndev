import React from 'react'
import logo from "../assets/frann.dev.SVG"  
import "../css/nav.css"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
        <div className='nav-flex'>
            <div>
                <Link to='/' aria-label='Logo'><img id='nav-logo' src={logo} alt="frann.dev logo"></img></Link>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'><Link to="/work">Work</Link></li>
                    <li className='nav-item'><Link to="/projects">Projects</Link></li>
                    <li className='nav-item'><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
