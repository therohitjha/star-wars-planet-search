import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";
import SearchPlanet from "./SearchPlanet";
export default function Home() {
  const { user } = useContext(LoginContext);
  const [planet, setPlanet] = useState();
  const [searchPlanet, setSearchPlanet] = useState("");
  const [displayPlanet, setDisplayPlanet] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const fetchPlanet = await fetch("https://swapi.co/api/planets", {
          mode: "no-cors",
        });
        const response = await fetchPlanet.json();
        const data = await response.results;
        setPlanet(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPlanet();

    const timer = setInterval(() => {
      setCount(0);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const handleSearch = async (event) => {
    const { value } = event.target;
    setSearchPlanet(value);
    if (user.name === "Luke Skywalker" && count <= 15) {
      setCount(count + 1);
      if (value) {
        try {
          const filterPlanet = await planet.filter((_) =>
            _.name.toLowerCase().includes(value)
          );
          setDisplayPlanet(filterPlanet);
        } catch (err) {
          console.log(err);
        }
      } else {
        setDisplayPlanet("");
      }
    } else {
      setDisplayPlanet("");
      alert(`Search Limit Exceeded, Please Wait...`);
    }
  };

  return (
    <>
      {user.isLogged ? (
        <SearchPlanet
          displayPlanet={displayPlanet}
          searchPlanet={searchPlanet}
          handleSearch={handleSearch}
        />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}
