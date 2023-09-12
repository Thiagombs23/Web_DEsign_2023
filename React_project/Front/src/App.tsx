import { useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  function salvar(){
  axios.post("http://localhost:3001/marca",{name})
  .then(({data})=>console.log(data));
  }
  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Digite o Nome"
      />
      <div>{name}</div>
      <button onClick={salvar}>Salvar</button>
    </div>
  );
}

export default App;
