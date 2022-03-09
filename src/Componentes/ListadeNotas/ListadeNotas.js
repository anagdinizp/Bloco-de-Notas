import React from 'react';
import Notas from '../Notas/Notas';
import { EstiloListadeNotas } from './style';
import CriarNotas from '../CriarNotas/CriarNotas';

const ListadeNotas = ({ Anotacoes }) => {
    return (
        <EstiloListadeNotas>
            {Anotacoes.map((nota) => <Notas id={nota.id} text={nota.text} date={nota.date}/>)}
            <CriarNotas></CriarNotas>
        </EstiloListadeNotas>
    )
}

export default ListadeNotas