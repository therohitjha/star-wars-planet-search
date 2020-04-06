import React from "react";

function SearchPlanet({ displayPlanet, searchPlanet, handleSearch}) {
  console.log(displayPlanet);

  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={searchPlanet}
        onChange={(e) => handleSearch(e)}
        className="input-box mb"
        autoFocus
      />
      {displayPlanet &&
        displayPlanet.map((_) =>
          parseInt(_.population) <= 10000 || _.population === "unknown" ? (
            <h4 key={_.name}>{_.name}</h4>
          ) : (
            <h1 key={_.name}>{_.name}</h1>
          )
        )}
    </>
  );
}

export default SearchPlanet;
