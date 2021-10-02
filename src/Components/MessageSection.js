import React from 'react'
import styled from 'styled-components'
import avatar1 from '../img/avatar1.svg'
import avatar2 from '../img/avatar2.svg'
import avatar3 from '../img/avatar3.svg'
import avatar4 from '../img/avatar4.svg'
import avatar5 from '../img/avatar5.svg' 
import messaging from '../img/conversation.svg'
import bgCircle from '../img/circleBg.svg'

function MessageSection() {
    return (
        <MessageSectionStyled>
            <div className="message-container">

                <div className="left-item">               
                    <h2 className="secondary-heading">
                        We support you in 5 different languages.
                    </h2>
                    <p className='m-para'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil consequuntur adipisci aut repellendus consequatur omnis est quos accusantium voluptate, quia repudiandae officia enim, exercitationem quaerat modi. Doloremque ipsa veniam nostrum.
                    </p>
                    <div className="img-container">
                        <img src={avatar1} alt="" className="img-1" />
                        <img src={avatar2} alt="" className="img-2" />
                        <img src={avatar3} alt="" className="img-3" />
                        <img src={avatar4} alt="" className="img-4" />
                        <img src={avatar5 } alt="" className="img-5" />
                        <p>&nbsp; +25</p> 
                    </div>
                    <img src={bgCircle} alt="" className="bgcircle" />
                   
                </div>
                <div className="right-item">
                    <img src={messaging} alt="" />
                    <img src={bgCircle} alt="" className="bgcircle" />
                </div>
            </div>
        </MessageSectionStyled>
    )
}

const MessageSectionStyled = styled.section`

.message-container{
    display:grid;
    grid-template-columns: repeat(2, 1fr);

}
p{
    font-size:1rem;
}
    .m-para{
        padding:1rem 0;
    }
     .left-item{
         position:relative;
         padding-right:  2rem;

         .img-container{
             display:flex;
             align-items: center;
             .img-1,.img-2,.img-3,.img-4,.img-5{
                margin-left:-22px;
                
             }
             margin-left: 1rem;
            
         }
         .bgcircle{
            position: absolute;
            top:-12%;
            left:-12%;
            width: 25%;
            height: auto;
            z-index: -1;
        }
     }

     .right-item{
         position:relative;
        img{
            width:80%;
            margin-left: 2rem;
        }
        .bgcircle{
            position: absolute;
            bottom:-2%;
            right:-2%;
            width: 25%;
            height: auto;
            z-index: -1;
        }
     }

     @media screen and (max-width:960px){
       
        .message-container{
            grid-template-columns: repeat(1,1fr);   
        }
        .left-item{
            text-align:center;
            margin-bottom: 5rem;
        }
        .img-container{
            justify-content: center;
        }
        .right-item{
            display: flex;
            justify-content: center;
            img{
                width: 50%;
            
            }
        }
    }

    @media screen and (max-width:768px){
       
        .left-item{
            padding-right: 0;
        }
        .right-item{
            display: flex;
            justify-content: center;
            img{
                width: 70%;
            
            }
        }
       
    }

    @media screen and (max-width:500px){
       
        .left-item{
            padding-right: 0;
        }
        .right-item{
            display: flex;
            justify-content: center;
            img{
                width: 70%;
            
            }
        }
       
    }

`;

export default MessageSection
