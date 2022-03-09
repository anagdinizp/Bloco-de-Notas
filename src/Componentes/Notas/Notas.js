import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { EstiloNotas } from './style';
import { Footer } from './style';
import { Small } from '../CriarNotas/style';
import { Texto } from './style';

const Notas = ({ id, text, date }) => {
    return(
        <EstiloNotas>
            <Texto>{text}</Texto>
            <Footer>
                <Small>{date}</Small>
                <MdDeleteForever className='icon-deletar' size='1.3em'/>
            </Footer>
        </EstiloNotas>
    )
}

export default Notas