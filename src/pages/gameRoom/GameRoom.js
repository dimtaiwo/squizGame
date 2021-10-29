import { useEffect, useContext } from "react";
import { useParams, useHistory } from "react-router-dom";

import QRCode from "react-qr-code";

import { SocketContext } from "../../Context";

import "./GameRoom.css";
import InviteCard from "../../components/assets/custom-squid-game-card-logo.png";

export default function GameRoom() {
  const { socket } = useContext(SocketContext);
  const { setData } = useContext(SocketContext);

  const history = useHistory();

  const { id } = useParams();

  useEffect(() => {
    socket.emit("join", id);

    socket.on("joined", (socket) => { });

    socket.on("receiveData", (data) => {
      setData(data);
    });

    socket.emit("getData", id);
  }, []);

  socket.on("sendQuestions", (questionsReceived) => {
    setData(questionsReceived);
  });

  const getLobbyUrl = () => {
    // const url = window.location.href;
    // const st = url.replace("game", "join");
    // return st.replace(id, `?id=${id}`);
    return `https://squiz-game.netlify.app/join?id=${id}`
  };

  const handleClick = () => {
    history.push(`/lobby/${id}`);
  };

  return (
    <div className="Game-room">
      <h2 className="game-room-title">
        This is the game room page for id {id}
      </h2>

      <div className="invitation-qr">
        <QRCode className="qr-code" value={getLobbyUrl()} />
      </div>

      <div className="display-questions">
        <button className="enter-lobby" onClick={handleClick}>
          Enter Lobby
        </button>

        <img className="house-logo" src={InviteCard} alt="" width="100px" />
      </div>
    </div>
  );
}
