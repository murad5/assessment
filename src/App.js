import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Relatability from './Components/Relatability/Relatability';
import Reframing from './Components/Reframing/Reframing';
import Home from './Components/Home/Home';
import Resonance from './Components/Resonance/Resonance';
import Reorient from './Components/Reorient/Reorient';
import Reimagination from './Components/Reimagination/Reimagination';
import Reports from './Components/Reports/Reports';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
    <Switch>
    <Route path="/relatability">
      <Relatability />
    </Route>
    <Route path="/reframing">
      <Reframing />
    </Route>
    <Route path="/resonance">
      <Resonance></Resonance>
    </Route>
    <Route path="/reorient">
      <Reorient></Reorient>
    </Route>
    <Route path="/reimagination">
      <Reimagination/>
    </Route>
    <Route path="/reports">
      <Reports></Reports>
    </Route>
    <Route path="/login">
      <Login/>
    </Route>
    <Route path="/">
      <Login/>
    </Route>
  </Switch>

</Router>
  );
}

export default App;
