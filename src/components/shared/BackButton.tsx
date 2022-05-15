import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setReset } from "../../reducers/appSlice";

export const BackButton = () => {
  const dispatch = useDispatch();

  const handleBackOnclick = () => {
    dispatch(setReset());
  };

  return (
    <Link to="/">
      <div>
        <button
          className="border-0 border-none p-3 md:p-4 bg-red-500 hover:bg-red-600 transition duration-500 focus:bg-green-500 text-white md:text-lg rounded-full"
          type="button"
          onClick={handleBackOnclick}
        >
          <i className="fa fa-home mr-2" />
          Volver al inicio
        </button>
      </div>
    </Link>
  );
};
