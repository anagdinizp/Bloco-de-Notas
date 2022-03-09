import styled from 'styled-components';

export const EstiloListadeNotas = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

export const Container = styled.div`
    max-width: 960px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
`;