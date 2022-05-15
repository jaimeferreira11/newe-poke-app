import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setStarting } from "../../../reducers/appSlice";
import pokeBola from "../../../assets/logo.png";
import { RootState } from "../../../store/store";

export const Welcome = () => {
  const { isStarting } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setStarting(true));
  };

  return isStarting ? (
    <></>
  ) : (
    <div className="flex flex-col mt-5 items-center">
      <p className="text-2xl">¿Querés conocer los pokemones?</p>
      <button
        className="flex align-center mt-5 border-0 border-none p-3 bg-red-500 hover:bg-red-600 text-white md:text-lg rounded-full"
        type="button"
        onClick={handleClick}
      >
        <img
          className="mr-2"
          src={pokeBola}
          style={{ width: "32px" }}
          alt="pokebola"
        />
        Obtener pokemones
      </button>
    </div>
  );
};
