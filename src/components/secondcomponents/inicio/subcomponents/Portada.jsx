import React from 'react'
import ImgPortada from "./images/Portada.jpg"

const Portada = () => {
  return (
    <>
      {/*<!-- Component: Basic blog card --> */}
      <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={ImgPortada}
            alt="card image"
            className="aspect-image w-full"
          />
        </figure>
        {/*  <!-- Body--> */}
        <div className="p-6">
          <header className="mb-4">
            <h3 className="text-xl font-medium text-red-500 font-bold">
              Nuestro 2° Aniversario
            </h3>
            <p className="text-sm text-slate-400"> Por Robert, 18 de Febrero, 2024</p>
          </header>
          <p className='text-black-800'> 
          Un día como hoy comenzó nuestra historia, un día como hoy hace 2 años. Con cada día que pasa, 
          mi amor por ti crece de formas que nunca imaginé. Estos dos años han sido los capítulos
           más hermosos de mi vida y no puedo esperar por todos los que aún nos quedan por
            escribir juntos. Feliz 2° aniversario, Mi Amor, mi cómplice, mi todo. Pasamos
             Muchas cosas juntos, peleas, risas, momentos inolvidables, simplemente <span className='text-red-500 font-bold'>"TE AMO"</span>.
          </p>
        </div>
      </div>
      {/*<!-- End Basic blog card --> */}
    </>
  )
}

export default Portada