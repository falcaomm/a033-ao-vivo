import { CardCarro, Titulo, Lista } from "./style";

export function Carro(props) {

  const mudaCarro = () => {
    props.setAutomovel(props.carro)
  }

    return (
      <CardCarro>
        <Titulo>{props.automovel.nome.toUpperCase()}</Titulo>
        <Lista>
          <li>Cor: {props.automovel.cor}</li>
          <li>Ano: {props.automovel["ano"]}</li>
          <li>Flex: {props.automovel.flex ? "true" : "false"}</li>
          <li>Adicionado: {props.adicionadoPor}</li>
          <button onClick={mudaCarro} >Muda Carro</button>
        </Lista>
      </CardCarro>
    );
  }
  