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
    padding-block: 5rem;
    display: grid;
    grid-template-columns: 48% 48%;
    align-items: center;
    gap: 4%;

    @media (max-width: 840px) {
        padding-top: 0;
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

/* *
* ================================================== *
* ============ Second Section @ Landing Page ======= *
* ================================================== *
**/

/* *
* =========== Explore =========== *
**/
export const Explore = styled.div`
    width: 100%;
    background-color: var(--secondary-color);
`

/* *
* =========== ExploreContent =========== *
**/
export const ExploreContent = styled.div`
    width: 100%;
    padding-block: 12rem;
    display: grid;
    grid-template-columns: 45% 50%;
    gap: 4%;

    @media (max-width: 991px) {
        grid-template-columns: 45% 50%;
        gap: 5%;
    }

    @media (max-width: 840px) {
        grid-template-columns: 100%;
        gap: 7%;
        text-align: center;
    }
`
/* *
* =========== ExploreLeft =========== *
**/
export const ExploreLeft = styled.div`
    width: 100%;
`;

/* *
* =========== ExploreLeftTitle =========== *
**/
export const ExploreLeftTitle = styled.p`
    width: 100%;
    margin-bottom: 2rem;
    font-weight: var(--fw-700);
    font-size: 3rem;
    text-transform: capitalize;
`;

/* *
* =========== ExploreLeftDescription =========== *
**/
export const ExploreLeftDescription = styled.p`
    margin-bottom: 2.2rem;
    font-size: 1.5rem;

    @media (max-width: 840px) {
        font-size: 1.6rem;
    }
`;

/* *
* =========== ExploreLeftButton =========== *
**/
export const ExploreLeftButton = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    @media (max-width: 840px) {
        justify-content: center;
    }
`;

/* *
* =========== ExploreRight =========== *
**/
export const ExploreRight = styled.div`
    width: 100%;
`;

/* *
* =========== ExploreRightRow =========== *
**/
export const ExploreRightRow = styled.div`
    width: 100%;
`;

/* *
* =========== ExploreRightRowData =========== *
**/
export const ExploreRightRowData = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 4rem 1.4rem;

    @media (max-width: 840px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        justify-content: center;
    }
`;

/* *
* =========== ExploreRightRowDataItem =========== *
**/
export const ExploreRightRowDataItem = styled.div`
    width: 100%;
    padding-block: 1.3rem;
    padding-inline: 1.6rem;
    border-radius: 1.4rem;
    display: grid;
    place-items: center;
    box-shadow: 0.3rem 0.2rem 1rem #bbb;

    @media (max-width: 840px) {
        width: 70%;
        margin-inline: auto;
    }
`;

/* *
* =========== ExploreRightRowDataItemName =========== *
**/
export const ExploreRightRowDataItemName = styled.p`
    font-weight: var(--fw-700);
    font-size: 1.5rem;

    @media (max-width: 840px) {
        font-size: 1.6rem;
    }
`;

/* *
* =========== ExploreRightRowDataItemImage =========== *
**/
export const ExploreRightRowDataItemImage = styled.div`
    width: 4rem;
`;

/* *
* =========== ExploreRightRowDataItemPrice =========== *
**/
export const ExploreRightRowDataItemPrice = styled.p`
    margin-block: 0.5rem;
    font-weight: var(--fw-700);
    font-size: 1.6rem;
`;

/* *
* =========== ExploreRightRowDataItemATL =========== *
**/
export const ExploreRightRowDataItemATL = styled.p`
    font-size: 1.4rem;
`;