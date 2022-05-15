import React, { useCallback, useEffect } from "react";
import { getPokemons } from "../../helpers/getPokemon";
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { ListPokemon } from "./components/ListPokemon";
import { PaginationPokemon } from "./components/PaginationPokemon";
import { Welcome } from "./components/Welcome";
import { Spinner } from "../shared/Spinner";
import { useDispatch, useSelector } from "react-redux";
import {
  pokemonsSuccess,
  setTotal,
  startLoading,
} from "../../reducers/appSlice";
import { RootState } from "../../store/store";

export const Home = () => {
  const { isStarting, isLoading, pokemons, offset, limit } = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const fetchPokemons = useCallback(async () => {
    dispatch(startLoading());
    const data = await getPokemons(limit, offset);
    dispatch(pokemonsSuccess(data.results));
    dispatch(setTotal(data.count));
  }, [dispatch, limit, offset]);

  useEffect(() => {
    if (isStarting) fetchPokemons();
  }, [isStarting, limit, offset, fetchPokemons]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="fixed w-full">
          <Navbar />
          {pokemons.length === 0 ? <Welcome /> : <PaginationPokemon />}
        </div>
        {pokemons.length > 0 && (
          <div className="container mx-auto mt-52 md:mt-72 ">
            {isLoading ? <Spinner /> : <ListPokemon pokemons={pokemons} />};
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
