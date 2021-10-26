import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import io from "socket.io-client";



export default function GameRoom() {

    const [socket, setSocket] = useState();
    if (!socket) {
        setSocket(io("http://localhost:4000/"));
    }

    const { id } = useParams();

    useEffect(() => {
        socket.emit("join", id);

        socket.on("joined", (sockId) => {
            console.log("Joined the room " + sockId);
        });
    }, []);

    // socket.emit("getData");



    // socket.on("receiveData", (data) => {
    //     console.log(data);
    // });

    return (
        <div className="Game-room">
            This is the game room page for id {id}
        </div>
    );
};

// CHECK IF ROOM WAS STARTED 
// IF NOT DISPLAY ROOM DOES NOT EXIST AND DISPLAY BUTTON FOR REDIRECTION TO HOME / CREATE / JOIN
// IF YES, DISPLAY QUESTIONS, MAYBE TIMER, BUTTONS TO ANSWER, FEEDBACK ON ANSWER SUBMIT