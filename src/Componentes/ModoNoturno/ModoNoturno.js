import React from 'react';
import { BotaoModoNoturno } from './style';

const ModoNoturno = (props) => {
    return (
        <BotaoModoNoturno onClick={() => props.setEscuro(!props.escuro)}>Modo Noturno</BotaoModoNoturno>
    )
}

export default ModoNoturno