import React from "react";
import { CardPokemon } from "./CardPokemon";
import PropTypes from "prop-types";
import { Pokemon } from "../../../interfaces/interfaces";

interface IProps {
  pokemons: Pokemon[];
}

export const ListPokemon = ({ pokemons }: IProps) => {
  if (pokemons.length === 0) return null;
  return (
    <div className="mt-5 w-full md:w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 lg:gap-7">
      {pokemons.map((p) => (
        <CardPokemon key={p.information.id} pokemon={p} />
      ))}
    </div>
  );
};

ListPokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.any).isRequired,
};
