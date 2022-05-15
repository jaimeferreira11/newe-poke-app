import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../../interfaces/interfaces";
import { setChangePerPage, setOffset } from "../../../reducers/appSlice";
import { RootState } from "../../../store/store";
import { goTopPage } from "../../../utils/goTopPage";
import { BackButton } from "../../shared/BackButton";

export const PaginationPokemon = () => {
  const { limit, offset, total }: AppState = useSelector(
    (state: RootState) => state.app
  );
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const changePages = (e: React.FormEvent<EventTarget>): void => {
    const target = e.target as HTMLInputElement;
    dispatch(setChangePerPage(Number(target.value)));
    dispatch(setOffset(0));
    setPage(1);
  };

  const handlePreviousOnclick = () => {
    if (offset === 0) return;
    dispatch(setOffset(offset - limit));
    goTopPage();
  };

  const handleNextOnclick = () => {
    dispatch(setOffset(Number(offset) + Number(limit)));
    setPage(page + 1);
    goTopPage();
  };

  return (
    <div className="w-full fixed border-2 bg-white p-4 ">
      <div className="flex justify-end xs:justify-evenly  items-center  ">
        <div className="p-4 ">
          <BackButton />
        </div>
        <div className="ml-2 p-2 flex text-sm justify-end items-center">
          <div className="flex flex-wrap flex-grow justify-center space-x-5 items-center p-2">
            <label className="hidden md:inline-block" htmlFor="pages">
              Cantidad registros
            </label>
            <select
              className="text-sm w-20 mr-2 rounded-md  bg-red-500 text-white p-2   hover:bg-red-600 transition-colors duration-500"
              name="pages"
              id="pages"
              onChange={changePages}
              value={limit}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>

          <div className="border w-14 md:w-auto p-2 rounded-md border-red-500 md:py-4 mr-4 md:px-10  md:mx-10">
            {page}/{Math.round(total / limit) + 1}
          </div>
          <div className="flex w-28">
            <button
              type="button"
              className=" text-sm rounded-md bg-red-500 text-white w-full hover:bg-red-600 focus:bg-red-700 p-1 mr-1  transition-colors duration-500"
              onClick={handlePreviousOnclick}
              disabled={offset === 0}
            >
              <span className="text-2xl mr-2">&laquo;</span>
            </button>
            <button
              type="button"
              className="rounded-md bg-red-500 text-white align-middle p-1 w-full hover:bg-red-600 focus:bg-red-700  transition-colors duration-500"
              onClick={handleNextOnclick}
              disabled={Math.round(total / limit) + 1 === page}
            >
              <span className="text-2xl ml-2">&raquo;</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
