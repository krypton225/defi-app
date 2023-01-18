import styled from "styled-components";

/* *
* =========== LandingStyle =========== *
**/
export const LandingStyle = styled.section`
    width: 100%;
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

    @media (max-width: 840px) {
        grid-template-columns: 100%;
        gap: 4rem;
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
* =========== ContainerLandingButtons =========== *
**/
export const ContainerLandingButtons = styled.div`
    width: 95%;
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 841px) {
        width: 100%;
        justify-content: center;
    }

    @media (min-width: 769px) and (max-width: 840px) {
        width: 65%;
        margin-inline: auto;
        justify-content: center;
    }
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