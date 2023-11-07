import { createContext, useEffect, useState } from "react";
import { LoteriaProps, Props } from "../types";

import resultado from "../services/resultado";

export const Contexto = createContext({} as LoteriaProps);

export function Provider({ children }: any) {
  const [megasena, setMegasena] = useState({} as Props);
  const [lotofacil, setLotofacil] = useState({} as Props);
  const [quina, setQuina] = useState({} as Props);
  const [ativo, setAtivo]=useState("megasena");

  useEffect(() => {
    (async function () {
      // const r = await loteria.get();
      const r = resultado
      setMegasena(r.megasena);
      setLotofacil(r.lotofacil);
      setQuina(r.quina);
      console.log( r );
    })();
  }, []);

  return (
    <Contexto.Provider value={{ megasena, lotofacil, quina,ativo, setAtivo }}>
        {children}
    </Contexto.Provider>
  );
}
