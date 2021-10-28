import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../../Context";
import './Results.css';
import YourScore from '../../components/assets/your-score.png';
import Money from '../../components/assets/falling_money.png';
import ThreeGuards from '../../components/assets/three-guards.jpg'
import ResultsTitleImg from '../../components/assets/results-title-img.png'

export default function Results() {

    const { points } = useContext(SocketContext);
    const { gameEnded } = useContext(SocketContext);
    const { lobbyId } = useContext(SocketContext);
    const { socket } = useContext(SocketContext);
    const { username } = useContext(SocketContext);

    const [currentScores, setCurrentScores] = useState([{ points: points, username: username }]);

    useEffect(() => {
        socket.on("updatedResults", (results) => {
            console.log("Te results now are: " + results);
            setCurrentScores(results);
        });

        socket.emit("result", { points: points, username: username, room: lobbyId });
    }, []);

    const getResultMessage = () => {
        if (gameEnded)
            // return <center><h1>The points for you are: {points}</h1></center>
            return (
                <div className="scores">
                    {currentScores.map(score => <p>User: {score.username} - Points: {score.points}</p>)}
                </div>
            );

        return <center>
            <h1 style={{ color: "red" }}>You have not played the game!!</h1>
        </center>
    }

    return (
        <div className="Results" role="results" aria-label="results">
            <img className="results-title" src={ResultsTitleImg} alt="" />
            {getResultMessage()}
            <p className="lobby-message">The lobby id is: {lobbyId} and the user is: {username}</p>
            <img className="three-guards" src={ThreeGuards} alt="" width="300px" />
        </div>
    );
};
