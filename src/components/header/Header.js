import React from 'react'
import './Styles.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1>Blog Bit Animes</h1>
        <ul className='links'>
            <li className='linkLi'><NavLink to="/">Home</NavLink></li>
            <li className='linkLi'>Destaques</li>
            <li className='linkLi'><NavLink to="/admin">Admin</NavLink></li>
        </ul>
    </div>
  )
}

export default Header