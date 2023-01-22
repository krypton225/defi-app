import styled from "styled-components";

/* *
* =========== SectionTitleStyle =========== *
**/
export const SectionTitleStyle = styled.p`
    width: 100%;
    position: relative;
    text-align: center;
    font-size: 3rem;
    text-transform: capitalize;

    &::after {
        content: "";
        width: 10%;
        height: 0.3rem;
        border-radius: 1rem;
        position: absolute;
        bottom: -0.55rem;
        left: 45%;
        background-color: var(--primary-color);
    }

    @media (max-width: 676px) {
        font-size: 2rem;
        font-weight: var(--fw-700);
    }
`;