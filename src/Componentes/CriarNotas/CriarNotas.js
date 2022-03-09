import React from 'react';
import { AddNotas } from './style';
import { Footer } from '../Notas/style';
import { BotaoSalvar } from './style';
import { TextArea } from './style';
import { Small } from './style';

const CriarNotas = () => {
    return (
        <AddNotas>
            <TextArea rows='8' cols='10' placeholder='Escreva para criar uma nova nota...'></TextArea>
            <Footer>
                <Small>Faltam 200 caracteres</Small>
                <BotaoSalvar>Salvar</BotaoSalvar>
            </Footer>
        </AddNotas>
    )
}

export default CriarNotas