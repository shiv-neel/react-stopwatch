import React from 'react'
import '../stylesheets/Time.css'

const Time = (props) => {
    return (
        <div className='time-display'>
            
            <span className='digits min'>{ (Math.floor(((props.time) / 60000)) % 60).toString().padStart(2, '0') }:</span>
            <span className='digits sec'>{ (Math.floor(((props.time) / 1000)) % 60).toString().padStart(2, '0') }</span>
            <span className='digits milsec'>:{parseFloat(((props.time) % 1000).toFixed(1)).toString().substring(0, 2).padStart(2, '0') }</span>
        </div>
    )
}

export default Time
