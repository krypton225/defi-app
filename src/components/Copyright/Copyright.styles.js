import styled from "styled-components";

/* *
* =========== CopyrightContainer =========== *
**/
export const CopyrightContainer = styled.div`
    width: 100%;
    padding-block: 1.4rem;
    background-color: var(--primary-color);
`;

/* *
* =========== CopyrightText =========== *
**/
export const CopyrightText = styled.p`
    width: 100%;
    text-align: center;
    font-size: 1.5rem;
    color: white;

    @media (max-width: 676px) {
        font-size: 1.1rem;
    }
`;