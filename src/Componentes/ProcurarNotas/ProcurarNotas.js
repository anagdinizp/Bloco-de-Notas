import React from 'react';
import { ProcurarNota } from './style';
import LupaIcon from '../LupaIcon/Lupa';
import InputPesquisar from '../InputPesquisar/InputPesquisar';

const ProcurarNotas = ({ procurarTexto }) => {
    return (
        <ProcurarNota>
            <LupaIcon/>
            <InputPesquisar 
            onChange={(event) => procurarTexto(event.target.value)}/>
        </ProcurarNota>
    )
}

export default ProcurarNotas