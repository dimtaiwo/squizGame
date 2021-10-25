import { Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/home/Home";
import Leaderboard from "./pages/leaderboard/Leaderboard";
import NotFound from "./pages/404/NotFound";
import JoinRoom from "./pages/JoinRoom/JoinRoom";
import CreateRoom from "./pages/CreateRoom/CreateRoom";
import BackButton from "./components/UI/BackButton";

function App() {
  return (
    <div className="App">
      <BackButton />
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/leaderboard" component={Leaderboard} />

        <Route exact path="/join" component={JoinRoom} />

        <Route exact path="/create" component={CreateRoom} />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
