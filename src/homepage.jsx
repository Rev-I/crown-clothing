import React from 'react'

import "./homepage.scss"

const Homepage = () => {
    return (
        <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>JACKET</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>SNEAKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
      <div className='wrapper'>
      <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>WOMENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>MENS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div>
      </div>
    </div>
    )
}

export default Homepage