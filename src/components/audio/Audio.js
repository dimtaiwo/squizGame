import React from 'react'
import SquidAudio from './Squid-Game-Pink-Soldiers.mp3'
import './Audio.css'

const Audio = () => {
    return (
        <div className="audio">
            <audio controls autoplay>
                <source src={SquidAudio} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default Audio
