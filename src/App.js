import React from 'react';
import SearchForm from './components/SearchForm';
import usePokemonData from './hooks/usePokemonData';
import Pokemon from './components/Pokemon';

const App = () => {
  const { pokemonData, getPokemonData, loading, error } = usePokemonData();
  return (
    <main>
      <SearchForm handleSubmit={getPokemonData} />
      {loading && <p>Loading...</p>}
      {error && <p>Uh oh... {error}</p>}
      <article>{pokemonData && <Pokemon pokemon={pokemonData} />}</article>
    </main>
  );
};

export default App;
