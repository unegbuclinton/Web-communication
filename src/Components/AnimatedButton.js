import React from 'react'
import styled from 'styled-components'
import arrow from '../img/arrow.svg'
import blob1 from '../img/blob_top.svg'
import blob2 from '../img/blob_bottom.svg'

function AnimatedButton( {name}) {
    return (
        <AnimatedStyled>
            {name}
            <img src={arrow} alt="" className='arrow'/>
            <img src={blob1} alt="" className='blob1'/>
            <img src={blob2} alt="" className='blob2'/>
            
            
        </AnimatedStyled>
    )
}

 const AnimatedStyled = styled.button`
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
    position:relative;
    overflow:hidden;
}

    .arrow{
        padding-left:.9rem;
        transition: all .4s ease-in-out;
    }
     &:hover{
        color: var(--accent-pink);
        .blob1{
            transition: all .4s ease-in-out;
            transform:translateX(-80px);
        }
        .blob2{
            transition: all .4s ease-in-out;
            transform:translateX(80px);
        }

        .arrow{
            padding-left:1.4rem;
        }
     }

    .blob1{
        position: absolute;
        pointer-events: none;
        top:0;
        right: 0;
        transition: all .4s ease-in-out;
    }
    .blob2{
        position: absolute;
        pointer-events: none;
        bottom:0;
        left: 0;
        transition: all .4s ease-in-out;
    }
    
 
 `;

export default AnimatedButton
