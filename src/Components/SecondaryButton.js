import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'


function SecondaryButton({name}) {
    return (
        <SecondaryButtonStyled>
            {name}
            <img src={arrow} alt="" />
        </SecondaryButtonStyled>
    )
}


const SecondaryButtonStyled = styled.button`
        
    
    background-color: var(--dark-primary);
    font-family: inherit;
    font-size: inherit; 
    padding: 0.8rem 1.1rem;
    color: white;
    border-radius: 20px;
    outline:none;
    border: none;
    cursor: pointer;
    display: flex;
    align-item: center;
    justify-content: space-between;



        img{
            padding-left: .9rem;
        }

`;


export default SecondaryButton
