import { BrowserRouter, Routes, Route } from "react-router-dom";
import Megasena from "../pages/Megasena";
import Lotofacil from "../pages/Lotofacil";
import Quina from "../pages/Quina";
import "./index.css"
import Menu from "../components/menu";

export default function Rotas() {
  return (
    <div className="principal-bloco">

    
    <BrowserRouter>
    <Menu/>
      <Routes>
        <Route path="/mega" element={<Megasena />} />
      </Routes>
      <Routes>
        <Route path="/loto" element={<Lotofacil />} />
      </Routes>
      <Routes>
        <Route path="/quina" element={<Quina />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}
