import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { Firebaseauthprovider } from "./Auth";
import Private from "./pages/Private";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Search from "./pages/Search";

function App() {
  return (
    <Firebaseauthprovider>
      <Router>
        <Switch>
          <Private exact path="/dashboard" component={Dashboard} />
          <Private exact path="/search" component={Search} />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth/register">
            <Register />
          </Route>
          <Route path="/auth/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </Firebaseauthprovider>
  );
}

export default App;
