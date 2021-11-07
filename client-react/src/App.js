import './App.css';
import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import LanguageSelect from "./screens/LanguageSelect";
import Survey from "./screens/Survey";
import Vs from "./screens/Vs";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser} />
      <Switch>
        <main>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/register">
            <Register setUser={setUser} />
          </Route>
          <Route path="/login">
            <Login setUser={setUser} />
          </Route>
          <Route path="/survey">
            <Survey />
          </Route>
          <Route path="/compare">
            <Vs user={user} />
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
