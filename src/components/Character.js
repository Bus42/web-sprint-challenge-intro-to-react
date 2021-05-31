import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("http://swapi.dev/api/people/")
      .then((res) => res.data)
      .then((data) => setCharacters(data.results))
      .catch((err) => console.error(err));
  }, []);

  const CharactersWrapper = styled.div`
    box-shadow: 2px 2px 3px 2px #303030;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    max-width: 90vw;
    margin: 1em auto;
    padding: 8px;
    background-color: #222;
    opacity: 0.8;
    color: whitesmoke;
    &:hover {
      background-color: #eee;
      color: #007aaf;
      transform: scale(1.05);
      opacity: 1;
    }
    transition: all 300ms ease-in-out;
  `;

  return characters ? (
    <div id="characters_wrapper">
      {characters.map((person, index) => {
        const { birth_year, name, height, eye_color, mass } = person;
        return (
          <CharactersWrapper className="person" key={index}>
            <h2>{name}</h2>
            <p>
              Born in {birth_year}, {name} is {height}cm tall with {eye_color}{" "}
              eyes and weighs {mass} kilos.
            </p>
          </CharactersWrapper>
        );
      })}
    </div>
  ) : (
    <div className="loader"></div>
  );
};

export default Characters;
