import React from 'react';

const Pokemon = ({ pokemon }) => {
  console.log(pokemon);
  const { name, types, id, abilities, game_indices, sprites } = pokemon;
  return (
    <>
      <h1>{name}</h1>
      <p>
        #
        {new Intl.NumberFormat('en-UK', { minimumIntegerDigits: 3 }).format(id)}
      </p>
      <img src={sprites.front_default} alt={name} />
      <p>types:</p>
      <ol>
        {types.map((entry) => (
          <li key={entry.type.name}>{entry.type.name}</li>
        ))}
      </ol>
      <p>abilities:</p>
      <ol>
        {abilities.map((abilitiesIndex) => (
          <li key={abilitiesIndex.ability.name}>
            {abilitiesIndex.ability.name}
          </li>
        ))}
      </ol>
      <p>appears in:</p>
      <ol>
        {game_indices.map((index) => (
          <li key={index.version.name}>{index.version.name}</li>
        ))}
      </ol>
    </>
  );
};

export default Pokemon;
