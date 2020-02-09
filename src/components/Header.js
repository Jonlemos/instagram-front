import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'
import logo from '../assets/logo.svg'
import camera from '../assets/camera.svg'

export default function Header(){
    return(
        <header id="main-header">
            <div className="header-content">
                <Link to='/'>
                    <img className='logo' src={logo} alt="CloneInsta"></img>
                </Link>
                <Link to='/new'>
                    <img className='logo' src={camera} alt="Send photo"></img>
                </Link>
            </div>

        </header>
    )
}