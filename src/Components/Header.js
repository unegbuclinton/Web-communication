import React from 'react'
import styled from 'styled-components'
import bg from '../img/bg.svg';
import Navigation from './Navigation';
import HeaderContent from './HeaderContent';

function Header() {
    return (
        <HeaderStyled>
           <div className="header-content">
               <Navigation />
               <HeaderContent />
           </div>
        </HeaderStyled>
    )
}

 const HeaderStyled = styled.header`
    height:125vh;
    width:100%;
    background-image: url(${bg});
    background-repeat:no-repeat;
    background-size:cover;
    background-position-y: 80%;
    .header-content{
        padding: 0 14rem;
    }

    @media screen and (max-width:960px){
        .header-content{
            padding:0 3rem;
        }
    }

    @media screen and (max-width:600px){
        .header-content{
            padding:0 3rem;
        }
    }
 `;


export default Header
