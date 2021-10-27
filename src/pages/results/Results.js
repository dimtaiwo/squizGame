import { useContext } from "react";
import { SocketContext } from "../../Context";

export default function Results() {

    const { points } = useContext(SocketContext);
    const { gameEnded } = useContext(SocketContext);

    const getResultMessage = () => {
        if (gameEnded)
            return <center><h1>The points for you are: {points}</h1></center>

        return <center> <h1 style={{ color: "red" }}>You have not played the game!!</h1> </center>
    }

    return (
        <div className="Results">
            {getResultMessage()}
        </div>
    );
};
