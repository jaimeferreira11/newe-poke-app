import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../store/store";
import { Footer } from "../shared/Footer";
import { Navbar } from "../shared/Navbar";
import { Spinner } from "../shared/Spinner";
import { InfoComponent } from "./components/InfoComponent";

export const PokemonDetail = () => {
  const { pokemonSelected } = useSelector((state: RootState) => state.app);

  return (
    <>
      <div className="sticky w-full">
        <Navbar />
      </div>

      <div className="flex flex-col content-between container mx-auto p-4 h-full mt-4">
        <Link to="/">
          <div>
            <button
              className="border-0 border-none p-3 md:p-4 bg-red-500 hover:bg-red-600 transition duration-500 focus:bg-green-500 text-white md:text-lg rounded-full"
              type="button"
            >
              <i className="fa fa-arrow-left mr-2" />
              Atrás
            </button>
          </div>
        </Link>
        {pokemonSelected != null ? (
          <div className="items-center md:justify-center text-center">
            <img
              className="mx-auto"
              src={pokemonSelected.information.sprites.front_default}
              alt={pokemonSelected.name}
            />
            <p className="inline-block md:text-2xl font-bold ">
              {pokemonSelected.name}
            </p>
            <br />

            <div className="inline-block mr-2">
              <InfoComponent
                title="Experiencia:"
                description={pokemonSelected.information.base_experience.toString()}
              />
            </div>
            <div className="inline-block mr-2">
              <InfoComponent
                title="Orden:"
                description={pokemonSelected.information.order.toString()}
              />
            </div>
            <div className="inline-block mr-2">
              <InfoComponent
                title="Peso:"
                description={pokemonSelected.information.weight.toString()}
              />
            </div>
            <div className="inline-block mr-2">
              <InfoComponent
                title="Altura:"
                description={pokemonSelected.information.height.toString()}
              />
            </div>

            <div className="mt-2 flex flex-col items-center md:space-y-1  bg-white border-2 shadow-md w-full ml-2 rounded-lg divide-y-2 divide-gray-400 divide-x-4">
              <div className="grid grid-cols-1 w-full gap-4 md:gap-0 md:grid-cols-2 lg:grid-cols-2 grid-flow-row text-center divide-y-4 md:divide-x-4">
                <div className="w-full md:h-full divide-y-2 divide-gray-400">
                  <div className="p-2">
                    <p className=" md:text-lg font-bold text-center">
                      Habilidades
                    </p>
                  </div>
                  <div className="p-2">
                    {pokemonSelected.information.abilities.map(
                      ({ ability: { name } }: any) => {
                        return <span key={name}>{name}</span>;
                      }
                    )}
                  </div>
                </div>

                <div className="w-full md:h-full divide-y-2 divide-gray-400">
                  <div className="p-2">
                    <p className=" md:text-lg font-bold text-center">
                      Movimientos
                    </p>
                  </div>
                  <div className="p-2">
                    {pokemonSelected.information.moves.map((move: any) => {
                      return <span key={move.move.name}>{move.move.name}</span>;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      <Footer />
    </>
  );
};
