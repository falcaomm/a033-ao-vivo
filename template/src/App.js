import { Garagem } from "./componentes/Garagem/Garagem";
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle/GlobalStyle";
import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("Manu");

  const [num, setNum] = useState(0)
  function apresentaGaragem() {
    alert(`Boas vindas à garagem de ${nome}`);
  }

  const mudaNum = () => {
    setNum(num + 1)
  }

  return (
    <div>
      <GlobalStyle />
      <button onClick={() => setNum(num + 1)}>Muda numero</button>
      <p>{num}</p>
      <Garagem
        nome={nome}
        setNome = {setNome}
        mensagemAprentacao={apresentaGaragem}
      />
    </div>
  );
}