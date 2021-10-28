import { useState, useContext } from "react";

import Particles from "react-particles-js";
import particlesConfig from "../../config/particlesConfig";

import RoundedButton from "../../components/UI/roundedButton/RoundedButton";

import "./Join.css";

import { SocketContext } from "../../Context";

export default function Join() {
  const { username, setUsername } = useContext(SocketContext);

  // Getting the room ID from the url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const idToJoin = urlParams.get("id");

  const [roomId, setRoomId] = useState(idToJoin);

  const inputChangeHandler = (event) => {
    setRoomId(event.target.value);
  };

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
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
              placeholder="Username.."
              value={username}
              onChange={usernameChangeHandler}
              type="text"
            />
          </div>

          <div className="col-11 col-sm-10 col-md-9 col-lg-8 col-xl-7 py-3">
            <input
              placeholder="Room ID.."
              value={roomId}
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
