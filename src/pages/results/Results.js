import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../Context";
import './Results.css';
import YourScore from '../../components/assets/your-score.png'

export default function Results() {

    const { points } = useContext(SocketContext);
    const { gameEnded } = useContext(SocketContext);
    const { lobbyId } = useContext(SocketContext);
    const { socket } = useContext(SocketContext);

    const [currentScores, setCurrentScores] = useState([{ points: points, username: "Dim" }]);

    useEffect(() => {
        socket.on("updatedResults", (results) => {
            setCurrentScores(results);
        });

        socket.emit("result", { points: points, username: "Dim", room: lobbyId });
    }, []);

    const getResultMessage = () => {
        if (gameEnded)
            // return <center><h1>The points for you are: {points}</h1></center>
            return (
                <div className="scores">
                    {currentScores.map(score => <center><h1>User: {score.username}, Points: {score.points}</h1></center>)}
                </div>
            );

        return <center>
            <h1 style={{ color: "red" }}>You have not played the game!!</h1>
        </center>
    }

    return (
        <div className="Results">
            {getResultMessage()}
            <h2>The lobby id is: {lobbyId}</h2>
        </div>
    );
};
