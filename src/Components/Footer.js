import React from 'react'
import styled from 'styled-components'
import logo from '../img/logo.svg'

function Footer() {
    return (
        <FooterStyled>
          <div className="footer-container">
                <div className="logo-container">
                    <div>
                        <img src={logo} alt="" />
                        <p> Copyright @2021 Unegbu Clinton <br />
                        All right Reserved</p>
                    </div>
                </div>

                <ul className="bottom-links">
                    <div className="link1">
                        <li>
                            <a href="#">Teams</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Fees</a>
                        </li>
                    </div>

                    <div className="link2">
                        <li>
                            <a href="#">Services</a>
                        </li>
                        <li>
                            <a href="#">Private Policy</a>
                        </li>
                        <li>
                            <a href="#">Projects</a>
                        </li>
                    </div>

                    <div className="link3">
                        <li>
                            <a href="#">Affiliate</a>
                        </li>
                        <li>
                            <a href="#">Terms of Use</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </div>
                </ul>
          </div>
        </FooterStyled>
    )
}


const FooterStyled = styled.footer`

padding: 4rem 18rem;
background-color: #DCE2F0;
height : 60vh;

.footer-container{
    display: grid;
    grid-template-columns: repeat(2,1fr);

    
}

.logo-container{
    display:flex;
    align-items: center;

    img{
        width: 80px;
    }
}

.bottom-links{
    display: flex;
    justify-content: space-between;

    li{
        padding: 2rem 0;
        color: var(--dark-primary);
    }
}

@media screen and (max-width:960px){
       
    padding: 3rem 8rem;
}

@media screen and (max-width:768px){
        
    padding: 2rem 2rem;
    background-color: red;
   
}



@media screen and (max-width:500px){
    
    padding: 0 4rem;
    height : 70vh;


    .footer-container{
        display: flex;
        flex-direction: column;
    }
    .logo-container{
        padding-top: 2rem;
        text-align: center;
        justify-content: center;
    }
   
}



`;
export default Footer
