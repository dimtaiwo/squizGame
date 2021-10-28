import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../Context";
import "./Results.css";

import Result from "../../components/result/Result";
import RoundedButton from "../../components/UI/roundedButton/RoundedButton";

import ThreeGuards from "../../components/assets/three-guards.jpg";
import ResultsTitleImg from "../../components/assets/results-title-img.png";

export default function Results() {
  const { points } = useContext(SocketContext);
  const { gameEnded } = useContext(SocketContext);
  const { lobbyId } = useContext(SocketContext);
  const { socket } = useContext(SocketContext);
  const { username } = useContext(SocketContext);

  const [currentScores, setCurrentScores] = useState([
    { points: points, username: username },
  ]);

  useEffect(() => {
    socket.on("updatedResults", (results) => {
      setCurrentScores(results);
    });

    socket.emit("result", {
      points: points,
      username: username,
      room: lobbyId,
    });
  }, []);

  const getResultMessage = () => {
    if (gameEnded) {
      return (
        <div className="scores">
          {currentScores.map((score) => (
            <Result username={score.username} points={score.points} />
          ))}
        </div>
      );
    }

    return (
      <center>
        <h1 style={{ color: "red" }}>You have not played the game!!</h1>
      </center>
    );
  };

  return (
    <div className="Results">
      <img className="results-title" src={ResultsTitleImg} alt="" />
      {getResultMessage()}

      {gameEnded && (
        <center>
          <p className="lobby-message">The lobby id is: {lobbyId}</p>
          <p className="lobby-message">You are: {username}</p>
        </center>
      )}

      <img className="three-guards" src={ThreeGuards} alt="" width="300px" />

      <center>
        <RoundedButton text="Back to Home" />
      </center>
    </div>
  );
}
