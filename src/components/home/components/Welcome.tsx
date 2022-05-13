import React from 'react'

export const Welcome = () => {
  return (
    <div className='flex flex-col mt-5 items-center'>
    <p>¿Estas listo?</p>
    <button
        className="border-0 border-none p-3 md:p-4 bg-red-500 hover:bg-red-600 text-white md:text-lg rounded-full"
        type="button"
      >
        <i className="fa fa-home mr-2" />
        Obtener pokemones
      </button>
    </div>
  )
}
