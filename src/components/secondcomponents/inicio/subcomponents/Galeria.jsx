import React from "react";
import Images from "../helper/Images";
import "./styles/Galeria.scss"

const Galeria = () => {
  const data = Images;
  ;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {data.map(({ imageLink }, index) => (
        <div className="card hover:scale-105 transition duration-500" key={index}>
          <img
            className="max-h-40 w-full max-w-full rounded-lg object-cover object-center"
            src={imageLink}
            alt="gallery-photo"
          />
        </div>
      ))}
    </div>
  );
};

export default Galeria;
