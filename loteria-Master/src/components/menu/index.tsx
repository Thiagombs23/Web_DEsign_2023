import {Link} from "react-router-dom" 
import {useLoteria} from "../../hooks"
import "./index.css";

export default function Menu() {
  const{ativo,setAtivo}= useLoteria();
  console.log("ativo",ativo)
  return (
 <div>
    <Link to="/mega" className={ativo==="megasena"? "ativo":"mega"} onClick={()=>setAtivo("megasena")} > Megasena</Link>
    <Link to="/quina"className={ativo==="quina"? "ativo":"quina"}onClick={()=>setAtivo("quina")}> Quina</Link>
    <Link to="/loto"className={ativo==="loto"? "ativo":"lotofacil"}onClick={()=>setAtivo("loto")}> Lotofacil</Link>
 </div>
  );
}
