import React from 'react'
import logo from "../assets/frann.dev.SVG"  
import css from "../css/nav.css"
import general from '../css/general.css'
import github from '../assets/social-media-images/github.svg'
import instagram from '../assets/social-media-images/instagram.svg'
import linkedin from '../assets/social-media-images/linkedin.svg'
import mail from '../assets/social-media-images/mail.svg'
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <div>
        <div className='nav-flex'>
            <div>
                <img id='nav-logo' src={logo}></img>
            </div>
            <div>
                <ul className='nav-list'>
                    <li className='nav-item'><Link to="/">Home</Link></li>
                    <li className='nav-item'><Link to="/work">Work</Link></li>
                    <li className='nav-item'><a href="#">Projects</a></li>
                    <li className='nav-item'><a href="#">Contact</a></li>
                    <div className='nav-item' style={{display: "flex", justifyContent: "space-evenly"}}>
                        <li className='nav-icon' style={{padding: "0px 3px"}}><a href="#"><img width="16px" height="16px" src={github}></img></a></li>
                        <li className='nav-icon' style={{padding: "0px 3px"}}><a href="#"><img width="16px" height="16px" src={instagram}></img></a></li>
                        <li className='nav-icon' style={{padding: "0px 3px"}}><a href="#"><img width="16px" height="16px" src={linkedin}></img></a></li>
                        <li className='nav-icon' style={{padding: "0px 3px"}}><a href="#"><img width="16px" height="16px" src={mail}></img></a></li>
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}
