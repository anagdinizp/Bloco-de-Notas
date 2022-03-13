import styled from 'styled-components';

export const AddNotas = styled.div`
    background-color: #FEFFCE;
`;

export const TextArea = styled.textarea`
        border: none;
        resize: none;
        background-color: #FEFFCE;

        TextArea:focus{
        outline: none;
        }
`;

export const BotaoSalvar = styled.button`
    background-color: #ededed;
    border: none;
    border-radius: 15px;
    padding: 5px 10px 5px 10px;
    
    :hover{
        background-color: #e1e1e1;
        cursor: pointer;
    }

`;

export const Small = styled.small`
    text-align: justify;
`;