import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { selectPokemon } from "../../../reducers/appSlice";
import { Pokemon } from "../../../interfaces/interfaces";

interface IProps {
  pokemon: Pokemon;
}

export const CardPokemon = ({ pokemon }: IProps) => {
  const dispatch = useDispatch();

  const {
    name,
    information: {
      moves,
      sprites: { front_default: imageUrl },
    },
  } = pokemon;

  const handleClick: () => void = () => {
    dispatch(selectPokemon(pokemon));
  };

  return (
    <Link to={`/detail`} onClick={handleClick}>
      <div className="pokecard flex flex-col w-auto py-8 px-4 md:px-5 lg:px-5 items-center border-2 shadow-xl border-gray-100 rounded-xl divide-solid divide-y-2 divide-gray-500 bg-white hover:bg-red-500 transition duration-500 ease-in-out">
        <p className="font-sans text-base subpixel-antialiased md:text-lg lg:text-xl font-semibold mb-2">
          {name}
        </p>

        <div className="">
          <img className="object-cover mt-2" src={imageUrl} alt={name} />
        </div>
        <div className="mt-1 w-full">
          {moves.length > 0 && (
            <h2 className="mt-2 font-bold text-center">Movimientos:</h2>
          )}
          <div className=" bg-white rounded-lg shadow">
            <ul className="divide-y-2 divide-gray-100">
              {moves.map((move: any, index: number) =>
                index < 4 ? (
                  <li key={move.move.name} className="p-2">
                    {move.move.name}
                  </li>
                ) : null
              )}
            </ul>
          </div>
          {moves.length > 4 && <p className="text-left mt-1 ">...y más</p>}
        </div>
      </div>
    </Link>
  );
};

CardPokemon.propTypes = {
  pokemon: PropTypes.objectOf(PropTypes.any).isRequired,
};
