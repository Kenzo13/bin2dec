import styled from 'styled-components';

export const StyledForm = styled.form`
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    width: 50%;
`;

export const Field = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Label = styled.span`
    margin: 10px;
    font-size: 24px;
`;

export const InputBinario = styled.input`
    width: 50%;
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    outline: none;

    &:focus {
        border: 1px solid red;
    }
`;

export const Button = styled.button`
    width: 20%;
    margin-bottom: 10px;
    margin-left: 10px;
    padding: 5px;
    border: 1px solid;
    border-radius: 5px;
    font-size: 18px;
    cursor: pointer;

    &:hover {
        border: 1px solid red;
        color:red;
    }
`;

export const InputDecimal = styled.input`
    width: 50%;
    font-size: 18px;
    margin-left: 10px;
    margin-bottom: 10px;
    border: 1px solid;
    border-radius: 5px;
    padding: 5px;
    outline: none;
`;