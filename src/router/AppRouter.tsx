import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App } from '../App';
import { Home } from '../components/home/Home';
import { NoFound } from '../components/NoFound/NoFound';

export const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}> </Route>
      <Route path="/*" element={<NoFound />}></Route>
    </Routes>
  </BrowserRouter>
  )
}
