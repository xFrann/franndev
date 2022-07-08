import React from 'react'
import logo from "../assets/frann.dev.SVG"  
import css from "../css/nav.css"
export default function Nav() {
  return (
    <div>
        <div className='nav-flex'>
            <div>
                <img id='nav-logo' src={logo}></img>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className='nav-item'><a href="#">Home</a></li>
                    <li className='nav-item'><a href="#">Work</a></li>
                    <li className='nav-item'><a href="#">Projects</a></li>
                    <li className='nav-item'><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
