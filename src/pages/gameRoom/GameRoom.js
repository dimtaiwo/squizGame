import { useState, useEffect, useContext } from "react";
import { NavLink, useParams, useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import QRCode from "react-qr-code";

import { SocketContext } from "../../Context";

import "./GameRoom.css";
import InviteCard from "../../components/assets/custom-squid-game-card-logo.png"

export default function GameRoom() {
    console.log("socket in local storage is " + localStorage.getItem("socketId"));
    const { socket, setSocket } = useContext(SocketContext);
    const { data, setData } = useContext(SocketContext);

    const history = useHistory();

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
        const st = url.replace("game", "join");
        return st.replace(id, `?id=${id}`);
    };

    const handleClick = () => {
        history.push(`/lobby/${id}`);
    }

    return (
        <div className="Game-room">
            <h2 className="game-room-title">
                This is the game room page for id {id}
            </h2>


            <div className="invitation-qr">
                <QRCode className="qr-code" value={getLobbyUrl()} />
            </div>

            <div className="display-questions">
                {data && console.log(data["questions"])}
                {/* <Link className="go-lobby" to={`/lobby/${id}`}>Go to Lobby</Link> */}
                <button className="enter-lobby" onClick={handleClick}>Enter Lobby</button>
                {/* {data && data.questions.map((question) => (<p>{question.question}</p>))} */}
                <img className="house-logo" src={InviteCard} alt="" width="100px" />
            </div>
        </div>
    );
}

// CHECK IF ROOM WAS STARTED
// IF NOT DISPLAY ROOM DOES NOT EXIST AND DISPLAY BUTTON FOR REDIRECTION TO HOME / CREATE / JOIN
// IF YES, DISPLAY QUESTIONS, MAYBE TIMER, BUTTONS TO ANSWER, FEEDBACK ON ANSWER SUBMIT
