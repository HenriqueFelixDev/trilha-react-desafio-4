import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    cursor:pointer;

    &:hover:not(:disabled) {
        opacity: 0.6;
    }

    &:disabled {
        background-color: #888888;
        border-color: #888888;
        cursor: not-allowed;
    }
`