import React, {useState} from 'react'
import '../stylesheets/Buttons.css'

const Buttons = (props) => {    
 

    return (
        <div>               
            <button className='btn play-pause' 
            onClick={props.startHandler}>{props.running}
            </button>
            
            <button className='btn stop' 
            onClick={props.resetHandler}><i className='fas fa-stop'></i>
            </button>

        </div>
    )
}

export default Buttons
