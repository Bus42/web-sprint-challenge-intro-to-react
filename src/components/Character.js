import React, { useState, useEffect } from "react";
import axios from 'axios';
// import styled from 'styled-components';

const Characters = () => {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        axios.get('http://swapi.dev/api/people/')
        .then(res => res.data)
        .then(data => setCharacters(data.results))
        .catch(err => console.error(err))
    }, [])
    return (
        characters
        ? <div id="characters_wrapper">
            {characters.map((person, index) => <div className="person" key={index}>
                <h2>{person.name}</h2>
                <p>Born in {person.birth_year}, {person.name} is {person.height}cm tall with {person.eye_color} eyes and weighs {person.mass} kilos. </p>
            </div> )}
        </div>
        : <div className="loader"></div>
    )
}

export default Characters;
