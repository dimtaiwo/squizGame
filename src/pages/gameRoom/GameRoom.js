import io from "socket.io-client";

export default function GameRoom() {

    // const id = "Pp6U7knXKOfO-pUQAAAN";

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');

    console.log(id);

    const socket = io("http://localhost:4000/");

    socket.emit("join", id);

    socket.emit("getData");

    socket.on("joined", () => {
        console.log("Joined the room " + id);
    });

    socket.on("receiveData", (data) => {
        console.log(data);
    });

    return (
        <div className="Game-room">
            This is the game room page
        </div>
    );
};

// CHECK IF ROOM WAS STARTED 
// IF NOT DISPLAY ROOM DOES NOT EXIST AND DISPLAY BUTTON FOR REDIRECTION TO HOME / CREATE / JOIN
// IF YES, DISPLAY QUESTIONS, MAYBE TIMER, BUTTONS TO ANSWER, FEEDBACK ON ANSWER SUBMIT