import styled from 'styled-components';

export const AddNotas = styled.div`
    background-color: #FEFFCE;
    padding: 1rem;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    height: 200px;
    justify-content: space-between;
`;

export const TextArea = styled.textarea`
        border: none;
        resize: horizontal; 
        width: 95%;
        background-color: #FEFFCE;

       :focus{
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