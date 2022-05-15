import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import NotFoundImg from "../../assets/not_found.png";
import { setReset } from "../../reducers/appSlice";
import { Navbar } from "../shared/Navbar";

export const NotFound = () => {
  const dispatch = useDispatch();

  const handleBackOnclick = () => {
    dispatch(setReset());
  };
  return (
    <>
      <div className="sticky w-full">
        <Navbar />
      </div>

      <div className="mt-10 flex flex-col w-full items-center">
        <p className="mb-2 text-2xl"> Página no encontrada :(</p>

        <Link to="/">
          <button
            className=" border-0 border-none p-3 bg-red-500 hover:bg-red-600 transition duration-500 focus:bg-green-500 text-white md:text-lg rounded-full"
            type="button"
            onClick={handleBackOnclick}
          >
            <i className="fa fa-home mr-2" />
            Volver
          </button>
        </Link>
        <img
          className="w-44 md:w-80 lg:w-96"
          src={NotFoundImg}
          alt="Not found Pokemon"
        />
      </div>
    </>
  );
};
