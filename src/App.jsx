import { useState } from "react";
import "./App.css";
import PokemonDetails from "./components/PokemonDetails";
import PokemonDetails2 from "./components/PokemonDetails2";
import PokemonList from "./components/PokemonList";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState();
  const [selectedPokemon2, setSelectedPokemon2] = useState();

  return (
    <>
      <h2>Pokemon Seleccionado</h2>
      {selectedPokemon && (
        <PokemonDetails pokemon={selectedPokemon}></PokemonDetails>
      )}
      {selectedPokemon2 && (
        <PokemonDetails2 pokemon={selectedPokemon2}></PokemonDetails2>
      )}
      <h2>Lista de Pokemons</h2>
      <PokemonList selectPokemon={setSelectedPokemon} selectedPokemon2={setSelectedPokemon2}></PokemonList>
    </>
  );
}

export default App;
