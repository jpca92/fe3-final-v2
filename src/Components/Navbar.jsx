import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'

const Navbar = () => {
  const {handleTheme, theme} = useContextGlobal()
  return (
    <nav>
      <h3 className='navbar-title'> DH Odonto</h3>
      <div className='navbar-list'>
        <Link to='/'><h3>Home</h3></Link>
        <Link to='/favs'><h3>Favs</h3></Link>
        <Link to='/contact'><h3>Contact</h3></Link>
        <button className='themeButton' onClick={handleTheme}>
          {theme === 'dark' ? '☀️' : '🌙' }</button>
      </div>
    </nav>
  )
}

export default Navbar