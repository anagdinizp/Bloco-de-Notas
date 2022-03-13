import React from 'react';
import Notas from '../Notas/Notas';
import { EstiloListaDeNotas } from './style';
import CriarNotas from '../CriarNotas/CriarNotas';

const ListaDeNotas = (props) => {
    return (
        <EstiloListaDeNotas>
            {props.anotacoes.map((nota) =>
                <Notas key={nota.id} id={nota.id} text={nota.text} date={nota.date} deletarNota={props.deletarNota} />)}
            <CriarNotas adicionarNota={props.adicionarNota} />
        </EstiloListaDeNotas >
    )
}

export default ListaDeNotas