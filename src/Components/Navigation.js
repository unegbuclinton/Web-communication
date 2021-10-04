import styled from 'styled-components';
import PrimaryButton from './PrimaryButton';
import logo from '../img/logo.svg';

function Navigation() {



    return (
        <NavigationStyled>
            <div className="nav-container">
            
               <div className= "navigator">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="nav-links">
                        <ul>
                            <li>
                                <a href="">Home</a>
                            </li>
                            <li>
                                <a href="">Features</a>
                            </li>
                            <li>
                                <a href="">Pricing</a>
                            </li>
                        </ul>
                        <PrimaryButton name='Sign up' />
                    </div>
                </div> 
            </div>
            
            
           
            
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav `

    .navigator{
        display:flex;
        justify-content:space-between;
        min-height:10vh;
        align-items:center;
        padding-top: 20px ;
        margin-bottom: 7rem;
    }
  
    ul{
        display:flex;
        justify-content: space-between;
        width: 70%; 
        margin-top: 10px;
    }
    .nav-links{
        display: flex;
        width: 70%;
        justify-content: space-between;
    }

    .nav-menu{
        display: none;
    }

    .fas fa-times,fas fa-bars{
        font-size: 2rem;
    }
   

    a:hover{
        color:var(--dark-primary);
    }

    @media screen and (max-width:600px){

        .navigator{
            flex-direction: column;
            justify-content:center;
            margin-bottom:2rem;
            height: 50vh;
        }
       .nav-links{
            
            flex-direction: column;
            justify-content:space-between;
            align-items: center;
        }
        ul{
            flex-direction: column;
            justify-content:space-between;
            align-items: center;
            height:60%;
            font-size: 3rem;
            margin-bottom: 2rem;
        }
        
    }
    
    @media screen and (max-width:500px){
        
        .navigator{
            flex-direction: column;
            justify-content:center;
            margin-bottom:2rem;
            height: 35vh;
        }
       .nav-links{
            
            flex-direction: column;
            justify-content:space-between;
            align-items: center;
        }
        ul{
            flex-direction: column;
            justify-content:space-between;
            align-items: center;
            height:60%;
            font-size: 2rem;
            margin-bottom: 2rem;
        }
        
       
    }

`;

export default Navigation
