import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    axios
      .get("http://swapi.dev/api/people/")
      .then((res) => res.data)
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  return characters ? (
    <div id="characters_wrapper">
      {characters.map((person, index) => {
        const { name, height, eye_color, mass, birth_year } = person;
        return (
          <Character
            key={index}
            name={name}
            height={height}
            eye_color={eye_color}
            mass={mass}
            birth_year={birth_year}
          />
        );
      })}
    </div>
  ) : (
    <div className="loader"></div>
  );
};

export default Characters;
