import { useState } from 'react';

const usePokemonData = () => {
  const [pokemonData, setPokemonData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const getPokemonData = async (endpoint) => {
    const POKEMON_API = 'https://pokeapi.co/api/v2/';

    setPokemonData('');
    setError(false);
    setLoading(true);

    let response;

    try {
      response = await fetch(`${POKEMON_API}${endpoint}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (err) {
      if (response.status === 404) {
        setError('Pokemon not found! Please try again');
      } else {
        console.log(err);
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { pokemonData, loading, error, getPokemonData };
};

export default usePokemonData;
