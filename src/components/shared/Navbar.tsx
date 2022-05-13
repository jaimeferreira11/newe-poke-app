import React from 'react'
import logo from '../../assets/logo.png';


export const Navbar = () => {
  return (
    <header className="flex flex-row bg-gradient-to-r from-green-700 to-green-500 h-32 md:h-48 shadow-lg py-8 justify-center items-center">
    <img
      className="animate-bounce rounded-full shadow-lg  h-3/4 mx-5"
      src={logo}
      alt="Pokemon Logo"
    />
    <h1 className="font-sans text-3xl bg-red-500 p-4 rounded-md text-white shadow border-4 border-gray-800 hover:bg-red-600 transition-colors duration-500">
      Pokemons!
    </h1>
  </header>
  )
}
