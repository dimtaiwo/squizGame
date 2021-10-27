import { useContext } from "react";
import { SocketContext } from "../../Context";
import './Results.css';
import YourScore from '../../components/assets/your-score.png'

export default function Results() {

    const { points } = useContext(SocketContext);
    const { gameEnded } = useContext(SocketContext);

    const getResultMessage = () => {
        if (gameEnded)
            return <div className="display-result"><h1>Your score is: {points}</h1></div>

        return <center> <h1 style={{ color: "red" }}>You have not played the game!!</h1> </center>
    }

    return (
        <div className="Results">
            {getResultMessage()}
        </div>
    );
};
