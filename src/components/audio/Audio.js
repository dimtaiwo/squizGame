import React from 'react'
import { useEffect, useState } from 'react'
import SquidAudio from './Squid-Game-Pink-Soldiers.mp3'
import useSound from 'use-sound';
import './Audio.css'

const Audio = () => {

    const [play] = useSound(SquidAudio);

    useEffect(() => {
        play();
    }, [])

    return (
        <div className="audio">
            <audio controls autoplay>
                <source src={SquidAudio} type="audio/mp3" />
            </audio>
        </div>
    )
}

export default Audio
