import React from 'react'
import { Footer } from '../shared/Footer';
import { Navbar } from '../shared/Navbar';
import { NotFoundPokemon } from './components/NotFoundPokemon';
import { Welcome } from './components/Welcome';

export const Home = () => {
  return (
    <div>

        <Navbar />

        <Welcome />
        <NotFoundPokemon  />
        <Footer />
    </div>
  )
}
