import React, { useState } from 'react';
import { AddNotas } from './style';
import { Footer } from '../Notas/style';
import { BotaoSalvar } from './style';
import { TextArea } from './style';
import { Small } from './style';

const CriarNotas = ({ adicionarNota }) => {
    const [novoTexto, setNovotexto] = useState('')

    const limiteCaracteres = 200

    const digitando = (event) => {
        if (limiteCaracteres - event.target.value.length >= 0) {
            setNovotexto(event.target.value)
        }
    }

    const salvarClick = () => {
        if (novoTexto.trim().length > 0) {
            adicionarNota(novoTexto)
            setNovotexto('')
        }
    }

    return (
        <AddNotas>
            <TextArea
                rows='8'
                cols='10'
                placeholder='Escreva para criar uma nova nota...'
                value={novoTexto}
                onChange={digitando}
            />
            <Footer>
                <Small>Restam {limiteCaracteres - novoTexto.length} caracteres</Small>
                <BotaoSalvar onClick={salvarClick}>Salvar</BotaoSalvar>
            </Footer>
        </AddNotas>
    )
}

export default CriarNotas