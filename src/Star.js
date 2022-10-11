import React from 'react'
import star from './image/icon-star.svg'
import './style.css'
export default function Star() {
    return (
        <div className='stardiv'>
            <img src={star} alt="star-img" />
        </div>
    )
}
