import React from 'react'
import styled from 'styled-components'
import card from '../img/creditcard.svg'

function CardSection() {
    return (
        <CardSectionStyled>
            
               <div className="card-container">
                <div className="card-left">
                        <h2 className="secondary-heading">
                            One card for all payments
                        </h2>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis exercitationem quidem culpa facilis deserunt dolore quam cum, modi laboriosam, dolor, eaque earum asperiores perferendis!</p>
                    </div>
                    <div className="card-right">
                        <img src={card} alt="" className='right-img'/>
                    </div>
               </div>
            
            
        </CardSectionStyled>
    )
}


const CardSectionStyled = styled.section`

    .card-container{
        display:grid;
        grid-template-columns: repeat(2, 1fr);
       
    }
    .card-right{
        display:flex;
        justify-content:flex-end;
        margin-bottom:2rem;
        align-items:center;
        margin-right:.5rem;
    }
    .card-left{
        padding: 10.5rem 0;
    }


    .right-img{
        width: 80%;
        
    }


    @media screen and (max-width:960px){
        .card-container{
            grid-template-columns: repeat(1,1fr);
            margin-bottom: 8rem;
        }
        .card-left{
            text-align: center;
        }
        .card-right{
            justify-content:center;
            width: 100%;
            margin-top: -5rem;
        }
        .right-img{
            width: 60%;
        }
    }

    @media screen and (max-width:500px){
        .right-img{
            width: 80%;
        }
       
       
    }
`;


export default CardSection
