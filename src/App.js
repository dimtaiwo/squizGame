import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import NotFound from "./pages/404/NotFound";
import JoinRoom from "./pages/JoinRoom/JoinRoom";
import CreateRoom from "./pages/createRoom/CreateRoom";


function App() {

  /**
   * DEFAULT COLOURS FOR SQUID GAME
   * #EE4872 => Pink
   * #016780 => Green / blue
   */

  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/create" component={CreateRoom} />

        {/* <Route exact path="/game/:id" component={GameRoom} /> */}

        <Route exact path="/leaderboard" component={Leaderboard} />

        <Route exact path="/join" component={JoinRoom} />

        <Route exact path="/create" component={CreateRoom} />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
