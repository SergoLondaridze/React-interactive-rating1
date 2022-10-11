import React from 'react'
import './style.css'
export default function Circle(props) {
    function click(event) {
        document.querySelectorAll('.circle').forEach((cir) => {
            cir.removeAttribute('id')
        })
        event.target.id = 'active'
    }
    return (

        <div className='circle' onClick={(event) => { click(event); props.onClick() }} style={{ pointerEvents: props.events }}>
            {props.children}
        </div>
    )
}