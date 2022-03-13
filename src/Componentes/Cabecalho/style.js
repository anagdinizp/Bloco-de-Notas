import styled from 'styled-components';

export const CabecalhoNotas = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const Titulo = styled.h1`
    color: ${({escuro}) => escuro ? 'white' : 'black'}
`;