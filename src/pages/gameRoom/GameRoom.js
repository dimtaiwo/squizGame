import { useState, useEffect, useContext } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import QRCode from "react-qr-code";

import { SocketContext } from "../../Context";

import "./GameRoom.css";

export default function GameRoom() {
    console.log("socket in local storage is " + localStorage.getItem("socketId"));
    const { socket, setSocket } = useContext(SocketContext);
    const { data, setData } = useContext(SocketContext);

    const { id } = useParams();
    console.log(useParams());
    console.log(id);

    useEffect(() => {
        socket.emit("join", id);
        console.log(id);

        socket.on("joined", (socket) => {
            console.log("Joined the room " + socket);
        });

        socket.on("receiveData", (data) => {
            console.log(data);
            setData(data);
        });

        socket.emit("getData", id);
    }, []);

    // const { id } = useParams();

    socket.on("sendQuestions", (questionsReceived) => {
        console.log(questionsReceived);
        setData(questionsReceived);
    });

    const getLobbyUrl = () => {
        const url = window.location.href;
        return url.replace("game", "lobby");
    };

    return (
        <div className="Game-room">
            <h2 className="game-room-title">
                This is the game room page for id {id}
            </h2>

            <center>
                <QRCode value={getLobbyUrl()} />
            </center>

            <div className="display-questions">
                <h2>Hello World</h2>
                {data && console.log(data["questions"])}
                <Link to={`/lobby/${id}`}>Go to Lobby</Link>
                {/* {data && data.questions.map((question) => (<p>{question.question}</p>))} */}
            </div>
        </div>
    );
}

// CHECK IF ROOM WAS STARTED
// IF NOT DISPLAY ROOM DOES NOT EXIST AND DISPLAY BUTTON FOR REDIRECTION TO HOME / CREATE / JOIN
// IF YES, DISPLAY QUESTIONS, MAYBE TIMER, BUTTONS TO ANSWER, FEEDBACK ON ANSWER SUBMIT
