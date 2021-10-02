import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

    :root{
        --purple-primary:#554DDE;
        --accent-pink: #F44E77;
        --neutral-light: #F2F6FF;
        --lavender-secondary:#6A6D9E;
        --dark-primary: #16194F;
        --border-colour:  #CAD6F1;
        
    }

    *{
        margin: 0;
        padding:0;
        list-style:none;
        box-sizing:border-box;
        text-decoration:none;



    }

    body{
        background-color:var(--neutral-light);
        color:white;
        font-size : .8rem;
    }
    
    a{
        color: inherit;
        font-size: 1rem;
    }
   
    p{
        color: var(--lavender-secondary);
        line-height:1.8rem;
        font-size:1rem;
    }
    .secondary-heading{
        font-size: 2.3rem;
        color: var(--purple-primary); 
      
    }
    .small-heading{
        font-size: 1.6rem;
        color: var(--purple-primary); 
        text-align: center;
    }
    span{
        color: var(--accent-pink);
    }




    // Utilities

    c-para{
        text-align: center;
    }
`;

export default GlobalStyle;