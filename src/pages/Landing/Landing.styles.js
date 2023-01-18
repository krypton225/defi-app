import styled from "styled-components";

/* *
* =========== LandingStyle =========== *
**/
export const LandingStyle = styled.section`
    width: 100%;
    height: 100vh;
    /* background-color: blue; */
`;

/* *
* =========== LandingContent =========== *
**/
export const LandingContent = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 48% 48%;
    align-items: center;
    gap: 4%;
    /* background-color: red; */

    @media (max-width: 840px) {
        grid-template-columns: 100%;
        gap: 5rem;
        text-align: center;
    }
`;

/* *
* =========== LeftLandingContent =========== *
**/
export const LeftLandingContent = styled.div`
    width: 100%;
`;

/* *
* =========== DescriptionLeftLandingContent =========== *
**/
export const DescriptionLeftLandingContent = styled.p`
    font-size: 1.7rem;
    text-transform: capitalize;
`;

/* *
* =========== TitleLeftLandingContent =========== *
**/
export const TitleLeftLandingContent = styled.h2`
    margin-block: 0.5rem;
    font-weight: var(--fw-700);
    font-size: 4rem;
    text-transform: capitalize;
`;

/* *
* =========== RightLandingContent =========== *
**/
export const RightLandingContent = styled.div`
    width: 33rem;
    margin-inline: auto;

    @media (min-width: 768px) {
        width: 38rem;
    }

    @media (min-width: 991px) {
        width: 40rem;
    }
`;