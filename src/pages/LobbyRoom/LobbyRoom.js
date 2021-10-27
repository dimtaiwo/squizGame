import { useContext, useState, useEffect } from 'react';
import { SocketContext } from '../../Context';
import { useParams, useHistory } from 'react-router-dom';
import Question from '../../components/question/Question';
import './LobbyRoom.css';


const LobbyRoom = () => {

    const { data, setData } = useContext(SocketContext);
    const { socket, setSocket } = useContext(SocketContext);
    const { points, setPoints } = useContext(SocketContext);
    const { gameEnded, setGameEnded } = useContext(SocketContext);
    const { lobbyId, setLobbyId } = useContext(SocketContext);

    const { id } = useParams();

    const [haveData, setHaveData] = useState(null);

    const [questionIndex, setQuestionIndex] = useState(0);

    const history = useHistory();


    useEffect(() => {
        if (gameEnded)
            history.push("/results");
    }, [gameEnded])

    useEffect(() => {

        socket.emit("getData", id);

        socket.emit("join", id);

        socket.on("joined", async (socket, gameQuestions) => {
            // setSocket(socket);
            console.log(gameQuestions);

            setLobbyId(id);

            if (gameQuestions) {
                // console.log(gameQuestions);
                await setData(gameQuestions);
                console.log("Joined the room " + socket);
                setHaveData(true);
            } else {
                setHaveData(false);
            }

        });
    }, []);

    const getQuestionWithIndex = () => {
        return data.questions[questionIndex].question
    };

    const getAnswerWithIndex = () => {
        const arr = [
            data.questions[questionIndex].correct_answer,
            ...data.questions[questionIndex].incorrect_answers
        ];

        return arr;
    };

    const registerAnswer = (answer) => {
        if (gameEnded)
            return;

        // DEBUG
        console.log("The correct_answer is: " + data.questions[questionIndex].correct_answer);
        console.log("The given_answer is: " + answer);

        if (questionIndex <= data.questions.length && answer === data.questions[questionIndex].correct_answer)
            setPoints(prevPoints => prevPoints + 3);

        if (questionIndex === data.questions.length - 1) {
            setGameEnded(true);
        } else {
            setQuestionIndex(prevIndex => prevIndex + 1);
        }
    };

    return (
        <div className="Lobby">
            <h2 className="lobby-room-title">This is the LOBBY room page for id {id}</h2>
            {/* {haveData && data.questions.map((question) => (<p dangerouslySetInnerHTML={{ __html: question.question }}></p>))} */}

            {/* {haveData && console.log(data.questions)} */}
            {haveData && <Question question={getQuestionWithIndex()} answers={getAnswerWithIndex()} registerAnswer={registerAnswer} />}

            {/* {haveData && console.log(data.questions)} */}

            {haveData == false ? <center><h1 style={{ color: 'red' }}>The lobby does not exist</h1></center> : ""}

        </div>
    );
};

export default LobbyRoom;