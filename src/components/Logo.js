import React from 'react'
import '../styles.scss'

const Logo= ({ error }) => {
    
    return (
        <div className='logo'>
            <img alt='logo' src='logo.png'></img>
            <div className={`logo-text ${error?'failure':null}`}>Weather Now</div>
        </div>
    )
}

export default Logo;