import React from 'react'
import styled from 'styled-components'


function Stats( {name, amount}) {
    return (
        <StatsStyled>
           <p>{name}</p>
            <h4>{amount}</h4>
        </StatsStyled>
    )
}

 const StatsStyled = styled.div`
 
    background-color:white;
    border-radius:50px;
    border: 1px solid var(--border-colour);
    width:42%;
    height:10rem;
    padding:2rem;
    margin-right: 1rem;
    box-shadow: 0px 25px 50px rgba (22,25,79,0.05);
    h4{
        font-size:2rem;
        color: var(--purple-primary);
    }
 `;

export default Stats
