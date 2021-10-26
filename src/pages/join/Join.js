import { useState, useContext } from "react";

import Particles from "react-particles-js";
import particlesConfig from "../../config/particlesConfig";

import RoundedButton from "../../components/UI/roundedButton/RoundedButton";

import "./Join.css";

import io from "socket.io-client";
import { Socket } from "socket.io";

import { SocketContext } from "../../Context";

export default function Join() {

    const { socket, setSocket } = useContext(SocketContext);

    const [roomId, setRoomId] = useState(socket.id);

    const inputChangeHandler = (event) => {
        console.log(event.target.value);
        setRoomId(event.target.value);

        socket.emit("join", roomId)

    };

    return (
        <div className="Join">
            <Particles className="particles" height="100vh" params={particlesConfig} />

            <div className="Join-form container-fluid">
                <div className="row justify-content-center">
                    <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7">
                        <input placeholder="Room ID.." onChange={inputChangeHandler} type="text" />
                    </div>

                    <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 join-buttons">
                        <RoundedButton text="Home" styles={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }} onClickPath="/" />
                        <RoundedButton id="join-room-button" text="Join Room" styles={{ backgroundColor: "#ee4872c0" }} onClickPath={`/game/${roomId}`} />
                    </div>
                </div>
            </div>
        </div>
    );
};


// JUST  A FORM TO REDIRECT TO gameRoom with the specific ID