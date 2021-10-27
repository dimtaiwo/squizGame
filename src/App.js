import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import NotFound from "./pages/404/NotFound";
import Join from "./pages/join/Join";
import CreateRoom from "./pages/createRoom/CreateRoom";
import GameRoom from "./pages/gameRoom/GameRoom";
import LobbyRoom from "./pages/LobbyRoom/LobbyRoom";
import Results from "./pages/results/Results";

import { useContext, useState } from "react";
import { SocketContext } from "./Context";
import { io } from "socket.io-client";



function App() {
  const [data, setData] = useState(["hello"]);
  const [socket, setSocket] = useState();
  const [points, setPoints] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);
  const [lobbyId, setLobbyId] = useState();
  const [username, setUsername] = useState(
    `User_${Math.floor(Math.random() * 1000)}`
  );

  const [maxPlayers, setMaxPlayers] = useState(9999);

  if (!socket) {
    const newSocket = io("http://localhost:4000/");

    setSocket(newSocket);
  }

  return (
    <div className="App">
      <SocketContext.Provider
        value={{
          socket,
          setSocket,
          data,
          setData,
          points,
          setPoints,
          gameEnded,
          setGameEnded,
          lobbyId,
          setLobbyId,
          username,
          setUsername,
          maxPlayers,
          setMaxPlayers,
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/create" component={CreateRoom} />
          <Route exact path="/game/:id" component={GameRoom} />
          <Route exact path="/join" component={Join} />
          <Route exact path="/lobby/:id" component={LobbyRoom} />

          <Route exact path="/results" component={Results} />

          <Route exact path="/leaderboard" component={Leaderboard} />
          <Route render={() => <NotFound />} />
        </Switch>
      </SocketContext.Provider>

    </div>
  );
}

export default App;
