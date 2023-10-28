export const getPokemon = (pokemonId) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    .then((res) => res.json())
    .then((data) => data);
};
