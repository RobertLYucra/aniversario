import React from "react";
import Images from "../helper/Images"

const Galeria = () => {
  const  recuerdosImages = Images;
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {recuerdosImages.map((recuerdo , index) => (
        <div key={index} className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
        {/*  <!-- Header--> */}
        <div className="p-4">
          <header className="flex gap-4">
            <a
              href="#"
              className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
            >
              <img
                src="https://images.vexels.com/media/users/3/185202/isolated/preview/04210f166dee214fc751791106b453b2-icono-de-jarabe-de-rosquilla-rosa.png"
                alt="user name"
                title="user name"
                width="30"
                height="30"
                className="max-w-full rounded-full"
              />
            </a>
            <div className="flex flex-col justify-center items-start">
              <h3 className="text-xl  font-medium text-slate-700">
              {recuerdo.date}
              </h3>
              <p className="flex">{recuerdo.desc}</p>
            </div>
          </header>
        </div>
        {/*  <!-- Image --> */}
        <figure>
          <img
            src={recuerdo.imageLink}
            alt="card image"
            className="aspect-image w-full"
          />
        </figure>    
      </div>
      ))}
    </div>
  );
};

export default Galeria;
