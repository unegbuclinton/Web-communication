import React from 'react'
import styled from 'styled-components'
import SecondaryButton from './SecondaryButton'
import phone from '../img/phone.svg'
import ring1 from '../img/ring_orange.svg'
import message1 from '../img/message_pink.svg'
import message2 from '../img/message_blue.svg'


function HeaderContent() {
    return (
        <HeaderContentStyled>
            <div className="header-container">
                <div className="content-container">
                    <div className='left-content'>
                        <div className="left-text-container">
                            <h1>Smart Banking for freelnacers</h1>
                            <p className="white">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eveniet hic nostrum soluta ipsum natus debitis amet adipisci, molestiae iusto asperiores expedita alias ipsam dolorem quasi optio iste, distinctio pariatur!
                            </p>

                            <SecondaryButton name='Register Now'/>
                        </div>
                    </div>
                    <div className='right-content'>
                        <img src={phone} alt="" className='phone' />
                        <img src={ring1} alt="" className="ring1" />
                        <img src={message1} alt="" className="message1" />
                        <img src={message2} alt="" className="message2" />

                    </div>

                </div>
            </div>
           
        </HeaderContentStyled>
    )
}

const HeaderContentStyled = styled.section`

    .content-container {
        display: grid;
        grid-template-columns: repeat(2,1fr); 
        padding-top: 3rem;
    }
    
    .header-container{
        display: flex;
    }

    .left-content{
        display:flex;
        align-items: center;
        padding-right: 3rem;
    }

    h1{
        font-size: 2.5rem;
        font-weight: 600;
    }
    .white{
        color: white;
        padding: 1.4rem 0;
        line-height: 1.5rem;
    }

    .right-content{
        position: relative;
        display: flex;
        justify-content: center;
    }
    .phone{
        width: 90%;
    }
    .ring1{
        position:absolute;
        bottom: 17%;
        right: 0;
        left:auto;
        animation: move2 2s infinite;
        transition: all .4s ease-in-out;
    }
    .message1{
        position:absolute;
        top: -5%;
        right: 0;
        left:auto;
        animation: move 4s infinite;
        transition: all .4s ease-in-out;
    }
    .message2{
        position:absolute;
        bottom: 15%;
        left:-10%;
        animation: move 7s infinite;
        animation-delay: .5s;
        transition: all .4s ease-in-out;
    }

    // Header Animation


        @keyframes move{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }

            50%{
                transform: translateY(-10px) rotate(20deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }

        @keyframes move2{
            0%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }

            50%{
                transform: translateY(-10px) rotate(50deg) scale(1.1) translateX(10px);
            }

            100%{
                transform: translateY(0) rotate(0) scale(1) translateX(0);
            }
        }

        @media screen and (max-width:960px){
           
            .message1,.message2,.ring1{
                display:none;
            }

            
            
        }

        @media screen and (max-width:600px){
           
           img{
                display:none;
            }
            .content-container{
                grid-template-columns: repeat(1,1fr);
            }
            
            .left-text-container{
                text-align:center;
                width:100%;
                
                left-content{
                    padding-right:0;
                }

            }

            
            
        }
        

            
       

`;

export default HeaderContent
