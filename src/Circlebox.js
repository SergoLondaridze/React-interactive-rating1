import React from 'react'
import Circle from './Circle'
import './style.css'
export default function Box(props) {
    return (
        <div className='circlecontainer'>
            <Circle onClick={() => { props.rate(1) }}>1</Circle>
            <Circle onClick={() => { props.rate(2) }}>2</Circle>
            <Circle onClick={() => { props.rate(3) }}>3</Circle>
            <Circle onClick={() => { props.rate(4) }}>4</Circle>
            <Circle onClick={() => { props.rate(5) }}>5</Circle>
        </div>
    )
}