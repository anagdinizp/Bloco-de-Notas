import React from 'react';
import BotaoDeletar from '../BotaoDeletar/BotaoDeletar';
import { EstiloNotas } from './style';
import { Footer } from './style';
import { Small } from '../CriarNotas/style';
import { Texto } from './style';

const Notas = ({ id, text, date, deletarNota }) => {
    return(
        <EstiloNotas>
            <Texto>{text}</Texto>
            <Footer>
                <Small>{date}</Small>
                <BotaoDeletar id={id} deletarNota={deletarNota}/>
            </Footer>
        </EstiloNotas>
    )
}

export default Notas