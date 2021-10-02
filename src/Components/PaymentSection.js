import React from 'react'
import styled from 'styled-components'
import Card from './Card'
import card from '../img/creditcard.svg'
import active from '../img/active.svg'
import inactive from '../img/inactive.svg'
import check from '../img/check.svg'
import checkDis from '../img/check-disabled.svg'

function PaymentSection() {
    return (
        <PaymentSectionStyled>
            <h3 className="small-heading"> An exceptional service, <span>at the right place.</span> </h3>
            <p className='c-para'> Start with  our free plan and switch to premium as you grow. </p>

            <div className="card-container">
                <Card 
                subscription={'Free'} 
                payment={'$0'}
                desc={'Manage your account with a simple and efficient account'}
                card={card}
                active={active}
                button={'Get Started'}
                inactive={inactive}
                check={check}
                checkDis={checkDis}
                text1={'10 free local transfers'}
                text2={'Free withdrawal in Naira up to N100,000 per month'}
                text3={'Free prepayment to other draft accounts'}
                text4={' prepaid debit card'}
                text5={'Virtual Cards'}
                text6={'Priority 24/7 support'}
                text7={'Exchange 24 currencies'}
                text8={'Multi access users'}
                />

                <Card 
                subscription={'Premium'} 
                payment={'$10'}
                desc={'Manage your account with a simple and efficient account'}
                card={card}
                active={active}
                button={'Get Started'}
                inactive={inactive}
                check={check}
                checkDis={checkDis}
                text1={'10 free local transfers'}
                text2={'Free withdrawal in Naira up to N100,000 per month'}
                text3={'Free prepayment to other draft accounts'}
                text4={'prepaid debit card'}
                text5={'Virtual Cards'}
                text6={'Priority 24/7 support'}
                text7={'Exchange 24 currencies'}
                text8={'Multi access users'}
                />
            </div>
        </PaymentSectionStyled>
    )
}

const PaymentSectionStyled = styled.section`

    margin: 15rem 0;
    .card-container{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 4rem;
        padding-top: 7.5rem;
    }
    .c-para{
        text-align : center;
    }

    @media screen and (max-width:689px){
        .card-container{
            grid-template-columns: repeat(1,1fr);
           
        }
       

    }

    @media screen and (max-width:768px){
       
        .card-container{
           display:flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
        }
       
        
       
    }


    @media screen and (max-width:500px){
       
        .card-container{
           display:flex;
           flex-direction: column;
           justify-content: center;
           align-items: center;
        }
       
        
       
    }
`;

export default PaymentSection
