import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from 'styled-components';

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
    box-shadow: 2px 2px 3px 3px #303030;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    max-width: 90vw;
    margin: 1em auto;
    padding: 8px;
    background-color: #222;
    opacity: .80;
    color: whitesmoke;
  `;
  return characters ? (
    <div id="characters_wrapper">
      {characters.map((person, index) => (
        <CharactersWrapper className="person" key={index}>
          <h2>{person.name}</h2>
          <p>
            Born in {person.birth_year}, {person.name} is {person.height}cm tall
            with {person.eye_color} eyes and weighs {person.mass} kilos.
          </p>
        </CharactersWrapper>
      ))}
    </div>
  ) : (
    <div className="loader"></div>
  );
};

export default Characters;
