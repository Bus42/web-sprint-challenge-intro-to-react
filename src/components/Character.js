import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { name, height, eye_color, mass, birth_year } = props;
  const CharacterWrapper = styled.div`
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
      color: #ffe81f;
      transform: scale(1.05);
    }
  `;

  return (
    <CharacterWrapper className="props">
      <h2>{name}</h2>
      <p>
        Born in {birth_year}, {name} is {height}cm tall with {eye_color} eyes
        and weighs {mass} kilos.
      </p>
    </CharacterWrapper>
  );
};

export default Character;
