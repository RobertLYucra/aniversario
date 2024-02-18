import { Route, Routes } from "react-router-dom";
import "./App.css";
import Inicio from "./components/secondcomponents/inicio/Inicio";
import Recuerdos from "./components/secondcomponents/recuerdos/Recuerdos";
import Fechas from "./components/secondcomponents/fechasimportantes/Fechas";
import Header from "./components/maincomponents/Header";

function App() {
  return (
    <div className="">
      <Header />
      <div className="main mt-12">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/recuerdos" element={<Recuerdos />} />
          <Route path="/fechas" element={<Fechas />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
