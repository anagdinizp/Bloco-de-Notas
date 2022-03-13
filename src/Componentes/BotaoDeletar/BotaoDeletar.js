import React from 'react';
import { Delbotao, Botao } from './style';
import IMG from '../../Assets/icons/lixeira.png'

const BotaoDeletar = ({id, deletarNota}) => {
    return(
        <Botao>
            <Delbotao src={IMG} onClick={() => deletarNota(id)}/>
        </Botao>
    )
}

export default BotaoDeletar