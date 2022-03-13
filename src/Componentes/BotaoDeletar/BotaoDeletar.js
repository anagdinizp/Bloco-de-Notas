import React from 'react';
import { Delbotao } from './style';
import IMG from '../../Assets/icons/lixeira.png'

const BotaoDeletar = ({id, deletarNota}) => {
    return(
        <Delbotao src={IMG} onClick={() => deletarNota(id)}/>
    )
}

export default BotaoDeletar