import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Pokemons from "./components/Pokemons"

function App() {
  const [pokemon, setPokemon] = useState("pikachu");
  const [pokemonType, setPokemonType] = useState("");
  const [pokemonData, setPokemonData] = useState([]);

  const getPokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      setPokemonType(res.data.types[0].type.name);
      setPokemonData(toArray);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getPokemon();
  },[]);

  function handleFormSubmit(e) {
    e.preventDefault();
    getPokemon();
  }

  function handleInputChange(e) {
    setPokemon(e.target.value.toLowerCase());
  }

  return (
    <Pokemons onFormSubmit={handleFormSubmit} onInputChange={handleInputChange} pokemonData={pokemonData} pokemonType={pokemonType}/>
  )
}

export default App;
