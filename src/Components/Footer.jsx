import React from 'react'
import digitalHouse from '../images/DH.png'
import facebook from '../images/ico-facebook.png'
import tiktok from '../images/ico-tiktok.png'
import instagram from '../images/ico-instagram.png'
import wpp from '../images/ico-whatsapp.png';

const Footer = () => {
  return (
    <footer>
      <div className='red-container'>
        <p>Johaymen Alvarez - Juan Pablo Cediel</p>
      </div>

      <div className="social">
        <div className='DH'>
          <img className='dh-logo' src={digitalHouse} alt='DH-logo' />
        </div>
        <div className='redes'>
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={tiktok} alt="tiktok" />
          <img src={wpp} alt="whatsApp" />
        </div>
      </div>

    </footer>
  )
}
export default Footer
