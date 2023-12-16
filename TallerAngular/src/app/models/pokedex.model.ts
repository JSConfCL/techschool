export interface Pokemon {
  abilities: PokemonAbilities[];
  name: string;
  id: number;
  image: string;
  type: string;
  weight: number;
  height: number;
}

export interface PokemonAbility {
  name: string;
  url: string;
}

export interface PokemonAbilities {
  ability: PokemonAbility;
  is_hidden: boolean;
  slot: number;
}
