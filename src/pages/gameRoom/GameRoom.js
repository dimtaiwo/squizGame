import { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import { SocketContext } from "../../Context";

import io from "socket.io-client";

import './GameRoom.css';

export default function GameRoom() {
    console.log("socket in local storage is " + localStorage.getItem("socketId"));
    const { socket, setSocket } = useContext(SocketContext);
    const { data, setData } = useContext(SocketContext);

    // const [socket, setSocket] = useState();
    // if (!socket) {
    //     setSocket(io("http://localhost:4000/"));
    // }

    const { id } = useParams();
    console.log(useParams());
    console.log(id);

    useEffect(() => {
        socket.emit("join", id);
        console.log(id);

        socket.on("joined", (socket) => {
            console.log("Joined the room " + socket);
        });

        socket.emit("getData");
        socket.on("receiveData", (data) => {
            console.log(data);
            setData(data);
        })

    }, []);

    // const { id } = useParams();

    socket.on("sendQuestions", (questionsReceived) => {
        console.log(questionsReceived);
        setData(questionsReceived);
    })

    return (
        <div className="Game-room">
            <h2 className="game-room-title">This is the game room page for id {id}</h2>
            <div className="display-questions">
                <h2>Hello World</h2>
                {data && console.log(data["questions"])}
                <Link to={`/lobby/${id}`}>Go to Lobby</Link>
                {/* {data && data.questions.map((question) => (<p>{question.question}</p>))} */}
            </div>
        </div>
    );
};

// CHECK IF ROOM WAS STARTED 
// IF NOT DISPLAY ROOM DOES NOT EXIST AND DISPLAY BUTTON FOR REDIRECTION TO HOME / CREATE / JOIN
// IF YES, DISPLAY QUESTIONS, MAYBE TIMER, BUTTONS TO ANSWER, FEEDBACK ON ANSWER SUBMIT