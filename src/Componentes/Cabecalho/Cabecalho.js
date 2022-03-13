import React from 'react';
import { CabecalhoNotas } from './style';
import { Titulo } from './style';
import ModoNoturno from '../ModoNoturno/ModoNoturno';

const Cabecalho = ({ escuro, setEscuro }) => {
    return(
        <CabecalhoNotas>
            <Titulo escuro={escuro}>Bloco de Notas</Titulo>
            <ModoNoturno setEscuro={setEscuro} escuro={escuro}/>
        </CabecalhoNotas>
    )
}

export default Cabecalho