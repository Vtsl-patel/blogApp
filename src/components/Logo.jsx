import React from 'react'
import logoImg from '../assets/logo-removebg-preview.png';

function Logo({className = "w-30 h-10"}) {
  return (
    <img
      className={`${className}`}
      src={logoImg}
      alt="Logo"
    />
  )
}

export default Logo