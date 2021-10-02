import React from 'react'
import styled from 'styled-components'
import {useState} from 'react'
import plus from '../img/plus.svg'
import minus from '../img/minus.svg'

function Question({title,description}) {

    const [Toggle, setToggle] = useState(false);

    const btnToggler = () =>{
        setToggle(!Toggle)
    };

    return (
        <QuestionStyled>
          <div className="question-container">
              <div className="toggle-title">
                    <h4> {title}</h4>
                    <button onClick={btnToggler}>
                        {Toggle ? <img src={minus} alt="" /> : <img src={plus} alt="" />}
                    </button>
              </div>
              {Toggle && <p>{description}</p>}
          </div>
        </QuestionStyled>
    )
}

const QuestionStyled = styled.div` 

background: #fff;
margin: 2rem 0;
padding: .2rem 1rem;
border-radius: 24px;
box-shadow: 0px 25px 50px rbga(22,25,79,0.06);

h4{
    color: #16194F; 
    font-size: 1.3em;
}

p{
    width: 95%;
    margin: 0 auto;
    padding: .5rem 0;
}

.toggle-title{
    display:flex;
    align-items: center;
    justify-content: space-between;

    button{
        background-color:transparent;
        outline: none;
        border: none;
        cursor: pointer;
    }

}

`;

export default Question
