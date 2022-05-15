import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PokemonDetail } from "../components/detail/PokemonDetail";
import { Home } from "../components/home/Home";
import { NotFound } from "../components/noFound/NotFound";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detail" element={<PokemonDetail />}></Route>
        <Route path="/*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
