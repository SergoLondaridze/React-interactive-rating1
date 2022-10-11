import React from 'react'
import thank from './image/illustration-thank-you.svg'
import './style.css'
export default function Thank(props) {
    return (
        <div className='cardcontainer'>
            <div className='thankbox'>
                <img src={thank} alt="thank img" />
                <div >You selected {props.rate} out of 5</div>
                <h1>Thank you</h1>
                <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
            </div>
        </div>
    )
}
