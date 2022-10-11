import React from 'react'
import './style.css'
export default function Submit(props) {
    return (
        <button className='submit' onClick={() => { props.submit() }}>
            SUBMIT
        </button>
    )
}