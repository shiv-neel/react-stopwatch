import React, {useState, useEffect} from 'react'
import Buttons from './Buttons';
import Time from './Time';
import '../stylesheets/Timer.css'

const Timer = () => {
    const [isActive, setActive] = useState(false)
    const [isPaused, setPaused] = useState(true)
    const [time, setTime] = useState(0)
    
    const updateTime = () => {
        setTime((time) => time + 10)
    }
    useEffect(() => {
        let interval = null
        if (isActive && isPaused === false) {
            interval = setInterval(updateTime, 10)
        }
        else {
            clearInterval(interval)
        }
        return () => {
            clearInterval(interval)
        }
    }, [isActive, isPaused])
    
    const startHandler = () => {
        setActive(true)
        setPaused(false)
    }

    const pauseHandler = () => {
        setActive(false)
        setPaused(true)
    }

    const resetHandler = () => {
        setActive(false)
        setPaused(true)
        setTime(0)
        
    }

    return (
        <div>
            <div className='time'>
                <Time time={time}/>
                <Buttons startHandler={isPaused ? startHandler : pauseHandler} 
                running={isActive ? <i className='fas fa-pause'></i> : <i className='fas fa-play'></i>} 
                resetHandler={resetHandler} isActive={isActive}/>
            </div>
            
        </div>
    )
}

export default Timer
