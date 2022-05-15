export interface AppState {
  pokemons: Pokemon[];
  isLoading: boolean;
  isStarting: boolean;
  offset: number;
  limit: number;
  total: number;
  pokemonSelected: Pokemon;
}

export interface Pokemon {
  name: string;
  url: string;
  information: Information;
}

export interface Information {
  id: number;
  abilities: Ability[];
  base_experience: number;
  height: number;
  name: string;
  order: number;
  weight: number;
  sprites: Sprites;
  moves: Move[];
}

export interface Move {
  name: string;
  url: string;
}

export interface Ability {
  name: string;
  url: string;
}

export interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}
