import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import NotFound from "./pages/404/NotFound";
import Join from "./pages/join/Join";
import CreateRoom from "./pages/createRoom/CreateRoom";
import GameRoom from "./pages/gameRoom/GameRoom"
import { useContext } from "react"
import { SocketContext } from "./Context"
import { io } from "socket.io-client";

function App() {

<<<<<<< HEAD
  const socket = io("http://localhost:4000/");

  socket.on("created", (roomId) => {
    console.log(roomId);
  });
=======
  /**
   * DEFAULT COLOURS FOR SQUID GAME
   * #EE4872 => Pink
   * #016780 => Green / blue
   */
>>>>>>> be466eefd342c0d947b383182946567773f2c4b4

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <SocketContext.Provider value={socket}>
          <Route exact path="/create" component={CreateRoom} />
          <Route exact path="/game/:id" component={GameRoom} />
          <Route exact path="/join" component={JoinRoom} />
        </SocketContext.Provider>

        <Route exact path="/leaderboard" component={Leaderboard} />

<<<<<<< HEAD
=======
        <Route exact path="/join" component={Join} />
>>>>>>> be466eefd342c0d947b383182946567773f2c4b4


        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
