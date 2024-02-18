import React from "react";
import "./style/fechas.scss";
const Fechas = () => {
  return (
    <div className="flex justify-center mt-6 items-center bg-transparent">
      <figure className="figure rounded-xl bg-white">
        <div className="">
          <h1 className="text-2xl font-bold text-center pt-2 rounded-xl text-red-500">
            Fecha de Aniversario
          </h1>
          <p className="text-center mb-1 font-bold text-slate-500">
            18 de Febrero
          </p>
        </div>
        <img
          className="rounded-xl"
          src="https://images.vexels.com/media/users/3/161638/isolated/preview/53dd06c7d98bd70bf0dd3d0a1769d84e-feliz-aniversario-letras-letras-de-cumpleanos.png"
        ></img>
      </figure>
    </div>
  );
};

export default Fechas;
