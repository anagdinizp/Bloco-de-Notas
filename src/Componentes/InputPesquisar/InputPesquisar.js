import React from 'react';
import { Pesquisar } from './style';

const InputPesquisar = ({ procurarTexto }) => {
    return(
        <Pesquisar onChange={(event) => procurarTexto(event.target.value)} type='text' placeholder='Procurar...'/>
    )
}

export default InputPesquisar