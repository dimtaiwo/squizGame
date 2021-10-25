import { Switch, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/home/Home';
import Leaderboard from './pages/leaderboard/Leaderboard';
import NotFound from './pages/404/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/leaderboard" component={Leaderboard} />

        <Route render={() => <NotFound />} />
      </Switch>
    </div>
  );
}

export default App;
