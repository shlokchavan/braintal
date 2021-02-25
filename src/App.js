import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './screens/Login/Login';
import Home from './screens/Home/Home';
import Demographic from './screens/Demographic/Demographic';
import Availability from './screens/Availability/Availability';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/demographic">
            <Demographic />
          </Route>
          <Route path="/availability">
            <Availability />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
