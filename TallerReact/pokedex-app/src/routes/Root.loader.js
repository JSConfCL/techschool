import { getPokemonList } from "../services/getPokemonList";

export async function loader() {
  const data = await getPokemonList(50);
  return { pokemons: data.results, next: data.next };
}
