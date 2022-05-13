import React from 'react';
import PropTypes from 'prop-types';

import NotFoundImg from '../../../assets/not_found.png';


export const  NotFoundPokemon = () => (
    <>
    <div className="mt-10 flex flex-col w-full items-center">
        <p className="mb-2 text-2xl"> Pokemon no encontrado :(</p>
      <img
        className="w-44 md:w-80 lg:w-96"
        src={NotFoundImg}
        alt="Not found Pokemon"
      />

      
    </div>
    </>
  );
  
