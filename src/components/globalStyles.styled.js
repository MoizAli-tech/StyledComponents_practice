import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        transition :all 1s ease;
        box-sizing:border-box;
    }

    a{
        font-size:3rem;
        padding:1rem;
        margin:1rem 0;
        text-decoration: none;
        color:${({theme})=>theme.colors.primary}
    }

    section{
        font-size:4rem;
        padding:1rem 0;
        height:50vh;

        h1{
            color:${({theme})=>theme.colors.primary}
        }
    }
   
`