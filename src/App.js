import React, { useState, createContext, useEffect } from "react";
import "./styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
export const LoginContext = createContext();
export default function App() {
  const [user, setUser] = useState({
    name: "",
    pass: "",
    isLogged: false
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const fetchPlanet = await fetch("https://swapi.co/api/people/1");
        const response = await fetchPlanet.json();
        const data = await response;
        setUser(prevData => {
          return { ...prevData, name: data.name, pass: data.birth_year };
        });
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);

  const handleForm = () => {
    setUser({ ...user, isLogged: true });
  };

  return (
    <Router>
      <Switch>
        <LoginContext.Provider value={{ user, handleForm }}>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </LoginContext.Provider>
      </Switch>
    </Router>
  );
}
