import React, { useState, createContext } from "react";
import "./styles.css";
import { HashRouter, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
export const LoginContext = createContext();
export default function App() {
  const [user, setUser] = useState({
    name: "Luke Skywalker",
    pass: "19BBY",
    isLogged: false,
    err: "",
  });

  const handleForm = (e) => {
    e.preventDefault();
    if (user.name !== "Luke Skywalker" || user.pass !== "19BBY") {
      setUser((prevData) => {
        return { ...prevData, err: "Wrong Username & Password" };
      });
    } else if (user.name === "Luke Skywalker" && user.pass === "19BBY") {
      setUser((prevData) => {
        return { ...prevData, isLogged: true };
      });
    }
  };

  return (
    <HashRouter basename="/">
      <LoginContext.Provider value={{ user, handleForm, setUser }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </LoginContext.Provider>
    </HashRouter>
  );
}
