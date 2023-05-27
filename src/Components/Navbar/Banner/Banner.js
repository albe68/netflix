import React from 'react'
import Banner from './Banner.css'

function Banner(){
    return (
        <div className='banner'>

            <div className='content'>
                <h1 className='title'>Movie</h1>
            </div>
            <div className='bannerButtons'>
                <button className='button'>Play</button>
                <button className='button'>My List</button>

            </div>
            <h1 className='description'>content</h1>

        </div>
    )
}

export default Banner;