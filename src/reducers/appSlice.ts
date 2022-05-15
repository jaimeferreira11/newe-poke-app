import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState, Pokemon } from "../interfaces/interfaces";

const initState: AppState = {
  pokemons: [],
  isLoading: false,
  isStarting: false,
  offset: 0,
  limit: 10,
  total: 0,
  pokemonSelected: {} as Pokemon,
};

const appSlice = createSlice({
  name: "app",
  initialState: initState,
  reducers: {
    setStarting: (state, action: PayloadAction<boolean>) => {
      state.isStarting = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    pokemonsSuccess: (state, action: PayloadAction<Pokemon[]>) => {
      state.pokemons = action.payload;
      state.isLoading = false;
    },
    setTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;
    },
    setChangePerPage: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setOffset: (state, action: PayloadAction<number>) => {
      state.offset = action.payload;
    },
    setReset: () => initState,
    selectPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.pokemonSelected = action.payload;
    },
  },
});

export const {
  setStarting,
  startLoading,
  pokemonsSuccess,
  setTotal,
  setChangePerPage,
  setOffset,
  setReset,
  selectPokemon,
} = appSlice.actions;
export default appSlice.reducer;
