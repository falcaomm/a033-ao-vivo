import styled from "styled-components";

export const Botoes = styled.button`
    background-color: beige;
    border-radius: 10px;
    height: 40px;
    width: 120px;
    border: 0px;
    margin: 10px;
`
export const ContainerGaragem = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: orange;
    height: 100vh;

    h1{
        color: beige;
        margin: 20px;
        margin-bottom: 0;
    }
`
export const Estacionamento = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 20px;
    column-gap: 30px;
    background-color: beige;
    text-align: center;
    padding: 15px;
    border-radius: 20px;
`