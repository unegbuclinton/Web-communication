import React from 'react'
import styled from 'styled-components'
import lines from '../img/lines.svg'
 import Question from './Question'
 import {quest} from './Questions'


function FaqSection() {
    
    
    return (
        <FaqSectionStyled>
            <h3 className="small-heading"> Frequently <span>Asked Questions</span></h3>
            <p className='c-para'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, voluptates est reiciendis eos consequatur animi ipsum! Mollitia ut omnis iure saepe aliquam .
            </p>

            <img src={lines} alt="" className="lines" />

            <div className="question-container">
                { quest.map((q)=>{
                return <Question  key={q.id}{...q}/>
                    })
                }
           </div>
        </FaqSectionStyled>
    )
}


const FaqSectionStyled = styled.section`



.c-para{
    width: 60%;
    margin:0 auto;
}
.question-container{
    padding-top : 10px;
}
.lines{
    position:absolute;
    left:0;
    top: 320%;
    z-index:-1;
}
img{
    width:100%;
}

@media screen and (max-width:768px){
       
    .c-para{
        margin:0;
        text-align: center;
        width: 100%;
    }
    
   
}


@media screen and (max-width:500px){
       
    .c-para{
        margin:0;
        text-align: center;
        width: 100%;
    }
    
   
}
`; 


export default FaqSection
