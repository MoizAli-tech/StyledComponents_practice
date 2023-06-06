import styled from "styled-components"

export const HomeStyle= styled.div`

    height: 85vh;

    h1{
        font-size:4rem;
        color:${({theme})=>theme.colors.primary}
    }
`