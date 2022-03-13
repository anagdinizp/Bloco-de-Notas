import React from 'react';
import Notas from '../Notas/Notas';
import { EstiloListadeNotas } from './style';
import CriarNotas from '../CriarNotas/CriarNotas';

const ListaDeNotas = ({ anotacoes, adicionarNota, deletarNota }) => {
    return (
        <EstiloListadeNotas>
            {anotacoes.map((nota) => 
            <Notas id={nota.id} text={nota.text} date={nota.date} deletarNota={deletarNota}/>)}
            <CriarNotas adicionarNota={adicionarNota}/>
        </EstiloListadeNotas >
    )
}

export default ListaDeNotas