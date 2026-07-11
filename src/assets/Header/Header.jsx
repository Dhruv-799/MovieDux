import React from 'react'
import'../../styles.css'
const Header = () => {
  return (
    <div className='header'>
        <img className='logo' src='logo.png' alt='MovieDux Logo' />
      <h2 className='app-subtitle'>It is a time for popcorn, find your favorite movies here!</h2>
    </div>
  )
}

export default Header
