import React from 'react'
import styled from 'styled-components'

function PrimaryButton({name}) {
    return (
        <ButtonStyled>
            {name}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    height: 20%;
    margin-top: 3px;
    background-color: var(--accent-pink);
    font-family: inherit;
    font-size: inherit; 
    padding: 0.5rem 1.5rem;
    color: white;
    border-radius: 20px;
    outline:none;
    border: none;
    cursor: pointer;

    &:hover{
        background-color:var(--dark-primary);
        transform: scale(1.1);
    }
`;

export default PrimaryButton
