import React from 'react';
import { ProcurarNota } from './style';
import LupaIcon from '../LupaIcon/Lupa';
import InputPesquisar from '../InputPesquisar/InputPesquisar';

const ProcurarNotas = ({ procurarTexto }) => {
    return (
        <ProcurarNota>
            <LupaIcon/>
            <InputPesquisar procurarTexto={procurarTexto}/>
        </ProcurarNota>
    )
}

export default ProcurarNotas