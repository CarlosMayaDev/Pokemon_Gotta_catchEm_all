import './App.css';
import { Switch, Route } from "react-router-dom";
import LandingPage from "./views/LandingPage";
import RoutesWithNavBar from './components/RoutesWithNavBar';
import { useAuth0 } from '@auth0/auth0-react'

function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route component={RoutesWithNavBar} />
      </Switch>
    </div>
  );
}

export default App;

// LANDING PAGE 
// HOME PAGE
// DETAIL PAGE
// FORM PAGE


