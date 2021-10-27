import { useState, useContext } from "react";

import Particles from "react-particles-js";
import particlesConfig from "../../config/particlesConfig";

import RoundedButton from "../../components/UI/roundedButton/RoundedButton";

import "./Join.css";

// import io from "socket.io-client";
// import { Socket } from "socket.io";

import { SocketContext } from "../../Context";

export default function Join() {
  const { socket, setSocket } = useContext(SocketContext);
  const { data, setData } = useContext(SocketContext);
  console.log(socket);
  console.log(data);

  const [roomId, setRoomId] = useState(socket.id);

  // const joinHandler = async () => {
  //     console.log('we made it to join handler')
  //     console.log(roomId);

  //     socket.emit("getData", roomId);

  //     socket.emit("join", roomId);

  //     socket.on("joined", async (socket, gameQuestions) => {
  //         // setSocket(socket);
  //         console.log(gameQuestions);

  //         // console.log(gameQuestions);
  //         await setData(gameQuestions);
  //         console.log("Joined the room " + socket);
  //     })

  //     console.log(data);
  //     console.log(socket);
  // }

  const inputChangeHandler = (event) => {
    console.log(event.target.value);
    setRoomId(event.target.value);
  };

  return (
    <div className="Join">
      <Particles
        className="particles"
        height="100vh"
        params={particlesConfig}
      />

      <div className="Join-form container-fluid">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7">
            <input
              placeholder="Room ID.."
              onChange={inputChangeHandler}
              type="text"
            />
          </div>

          <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 join-buttons">
            <RoundedButton
              text="Home"
              styles={{ backgroundColor: "rgba(0, 0, 0, 0.26)" }}
            />
            {/* <button text="Emit Join" onClick={joinHandler}>Handle Join</button> */}
            <RoundedButton
              id="join-room-button"
              text="Join Room"
              styles={{ backgroundColor: "#ee4872c0" }}
              onClickPath={`/lobby/${roomId}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// JUST  A FORM TO REDIRECT TO gameRoom with the specific ID
