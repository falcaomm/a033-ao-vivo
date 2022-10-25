import { useState } from "react";
import { Carro } from "../Carro/Carro";
import { ContainerGaragem, Estacionamento, Botoes } from "./style";

export function Garagem(props) {
  const [automovel, setAutomovel] = useState({
    nome: "Carro",
    cor: "",
    ano: 0,
    flex: false
  })

const carro1 = {
    nome: "fusca",
    cor: "AZUL",
    ano: 1970,
    flex: false
}

const carro2 = {
  nome: "fusca",
  cor: "VERDE",
  ano: 1970,
  flex: false
}

const carro3 = {
  nome: "fusca",
  cor: "BRANCO",
  ano: 1970,
  flex: false
}

const carro4 = {
  nome: "fusca",
  cor: "AMARELO",
  ano: 1970,
  flex: false
}
  const mudaNomeNobotao = () => {
    props.setNome("Labenu")
  }

  return (
    <ContainerGaragem>
      <h1>Garagem da {props.nome}</h1>
      <Botoes onClick={mudaNomeNobotao}>Muda Nome</Botoes>
      
      <Botoes onClick={props.mensagemAprentacao}>Mensagem</Botoes>

      <Estacionamento>
        <Carro automovel={automovel} adicionadoPor={props.nome} setAutomovel={setAutomovel} carro={carro1}/>
        <Carro automovel={automovel} adicionadoPor={props.nome} setAutomovel={setAutomovel} carro={carro2}/>
        <Carro automovel={automovel} adicionadoPor={props.nome} setAutomovel={setAutomovel} carro={carro3}/>
        <Carro automovel={automovel} adicionadoPor={props.nome} setAutomovel={setAutomovel} carro={carro4} />
      </Estacionamento>

    </ContainerGaragem>
  );
}
