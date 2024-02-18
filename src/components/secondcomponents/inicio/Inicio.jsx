import React from 'react'
import Portada from './subcomponents/Portada'
import Galeria from './subcomponents/Galeria'

const Inicio = () => {
  return (
    <>
        <Portada/>
        <h3 className='w-full text-center text-red-500 font-bold rounded mt-1 mb-1 bg-white pt-4 pb-2' >Nuestras Fotos</h3>
        <Galeria/>
    </>
  )
}

export default Inicio