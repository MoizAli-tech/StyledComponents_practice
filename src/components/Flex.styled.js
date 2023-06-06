import styled from "styled-components"

export const Flex = styled.div`
    display:flex;
    justify-content: ${({justify})=>justify || "space-between"};
    align-items:${({align})=>align ||"start"};
    row-gap:${({row})=>row || "1rem"};
    flex-direction:${({direction})=>direction}
`