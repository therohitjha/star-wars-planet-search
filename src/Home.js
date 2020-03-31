import React, { useEffect, useState, useContext } from "react";
import { LoginContext } from "./App";
import { Redirect } from "react-router-dom";
import SearchPlanet from "./SearchPlanet";
export default function Home() {
  const { user } = useContext(LoginContext);
  const [planet, setPlanet] = useState();
  const [searchPlanet, setSearchPlanet] = useState("");
  const [displayPlanet, setDisplayPlanet] = useState();

  useEffect(() => {
    const getPlanet = async () => {
      try {
        const fetchPlanet = await fetch("https://swapi.co/api/planets");
        const response = await fetchPlanet.json();
        const data = await response.results;
        setPlanet(data);
      } catch (err) {
        console.log(err);
      }
    };
    getPlanet();
  }, []);

  const handleSearch = async event => {
    const { value } = event.target;
    setSearchPlanet(value);
    if(value){
         const filterPlanet = await planet.filter(_ =>
      _.name.toLowerCase().includes(value)
    );
    setDisplayPlanet(filterPlanet);
    }else{
      setDisplayPlanet('')
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
