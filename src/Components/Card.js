import React from 'react'
import styled from 'styled-components'

function Card({
    subscription, payment, desc,button, card, active, inactive,check,checkDis,text1,text2,text3,text4,text5,text6,text7,text8
}) {
    return (
        <CardStyled>
            <h4 className='card-title'> {subscription}</h4>
            <h4 className='card-title'> {payment} <span>\ m</span> </h4>
            <p>{desc}</p>
            <div className="button-container">
                 <button>{button}</button>
            </div>
           <div className="card-img-container">
                <img src={card} alt="" />
           </div>
            <div className="plan-container">
                <img src={active} alt="" />
                <img src={inactive} alt="" />
            </div>
            <div className="list-check">
                <p className="text-check">
                    <img src={check} alt="" />
                    {text1}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text2}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text3}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text4}
                </p>
                <p className="text-check">
                    <img src={check} alt="" />
                    {text5}
                </p>
                <p className="text-check">
                    <img src={checkDis} alt="" />
                    {text6}
                </p>
                <p className="text-check">
                <img src={checkDis} alt="" />
                {text7}
            </p>
            <p className="text-check">
                <img src={checkDis} alt="" />
                {text8}
            </p>
            </div>
        </CardStyled>
    )
}

    const CardStyled = styled.div`
    
        background-color: white;
        padding: 3rem 3rem;
        border-radius: 40px; 
        width : 90%;
        box-shadow: 0px 25px  50px rgba(22,25,79,0.05);

        .card-title{
            font-size: 2rem;
            color: #000;
            text-align: center;
            padding: 1rem 0;
            span{
                font-size: 1rem;
            }

        }

        .button-container{
            text-align: center;
            padding: 1rem 0;

            button{
                border: 2px solid #16194f;
                padding: .8rem 1.5rem;
                outline: none;
                cursor: pointer;
                background: transparent;
                border-radius: 20px;
                color: #16194f;
                font-size: inherit;

            }
        }

        button:hover{
            transform: scale(1.1);
            
        }

        .card-img-container{
            display: flex;
            justify-content: center;

            img{
                width: 80%;
            }
        }

        .plan-container{
            display: flex;
            justify-content: center;
            align-item: center;
            padding:1.5rem 0 ;

            img{
                padding: 0 .3rem;
            }
        }

        .text-check{
            display:flex;
            align-items: center;
            padding: .2rem 0;

            img{
                padding-right: .3rem;
                width: 24px;
            }
            &:nth-child(6){
                color:#B7B7B7;
            }
            &:nth-child(7){
                color:#B7B7B7;
            }
            &:nth-child(8){
                color:#B7B7B7;
            }
        }
    `;

export default Card
