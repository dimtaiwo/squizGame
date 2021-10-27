import React from 'react'
import { useContext, useState } from 'react';
import { SocketContext } from '../../Context';
import { useParams } from 'react-router-dom';


const LobbyRoom = () => {

    const { data, setData } = useContext(SocketContext);
    const { socket, setSocket } = useContext(SocketContext);

    const { id } = useParams();
    // const emitEvent = () => {
    //     console.log(socket.id);
    //     socket.emit("join", socket.id);

    //     socket.on("joined", (sockId) => {
    //         console.log("Joined the room " + sockId);
    //     });
    // }


    return (
        <div>
            <h2 className="lobby-room-title">This is the LOBBY room page for id {id}</h2>
            {data && console.log(data)}
            {data && data.questions.map((question) => (<p>{question.question}</p>))}
        </div>
    )
}

export default LobbyRoom
