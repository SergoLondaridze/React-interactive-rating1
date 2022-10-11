import React, { useState } from 'react'
import Star from './Star'
import Text from './Text'
import './style.css'
import Submit from './Submit'
import Circlebox from './Circlebox'
export default function Card(props) {
    // const handleClick = event => {
    //     document.querySelectorAll('.circle').forEach((item) => {
    //         item.removeAttribute('id')
    //     })
    //     event.target.id = 'active';
    // }
    // const [visable, setVisable] = useState(false)
    // const [iterator, setIterator] = useState(0)
    return (
        <div className='cardcontainer'>
            <div className='boxcard'>
                <Star />
                <Text />
                <Circlebox rate={props.rate} />
                <Submit submit={props.submit} />
            </div>
            {/* {(!visable || iterator == 0) && <div>
                <Star />
                <Text />
                <div className='circlecontainer'>
                    <div className='circle' onClick={(event) => { handleClick(event); setIterator(1) }}>1</div>
                    <div className='circle' onClick={(event) => { handleClick(event); setIterator(2) }}>2</div>
                    <div className='circle' onClick={(event) => { handleClick(event); setIterator(3) }}>3</div>
                    <div className='circle' onClick={(event) => { handleClick(event); setIterator(4) }}>4</div>
                    <div className='circle' onClick={(event) => { handleClick(event); setIterator(5) }}>5</div>
                </div >
                <div className='submitcontainer'>
                    <button className='submit' onClick={() => { setVisable(true) }} >SUBMIT</button>
                </div>
            </div>}
            {visable && iterator != 0 && <Thank val={iterator} />} */}

        </div>
    )
}
