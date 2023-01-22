import styled from "styled-components";

/* *
* =========== FeaturedCardsContainer =========== *
**/
export const FeaturedCardsContainer = styled.div`
    width: 100%;
    margin-top: 5rem;
    text-align: center;
    display: grid;
    gap: 4rem;
    
    @media (max-width: 576px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 2rem;
    }
    
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 6rem;
    }
    
    @media (min-width: 991px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }
`;

/* *
* =========== FeaturedCard =========== *
**/
export const FeaturedCard = styled.div`
    width: 100%;
    padding: 5rem 1rem;
    border-radius: 1.3rem;
    background-color: var(--primary-color);
    color: white;
    
    @media (max-width: 767px) {
        width: 85%;
        margin-inline: auto;
    }
    
    @media (min-width: 650px) {
        width: 65%;
    }
    
    @media (min-width: 768px) {
        width: 100%;
    }
`;

/* *
* =========== FeaturedCardIcon =========== *
**/
export const FeaturedCardIcon = styled.div`
    width: 5.5rem;
    height: 5.5rem;
    border-radius: 50%;
    margin-inline: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.4rem;
    background-color: white;
    color: var(--primary-color);
`;

/* *
* =========== FeaturedCardTitle =========== *
**/
export const FeaturedCardTitle = styled.p`
    margin-block: 1.5rem;
    font-size: 1.8rem;
    text-transform: capitalize;
`;

/* *
* =========== FeaturedCardDescription =========== *
**/
export const FeaturedCardDescription = styled.p`
    font-size: 1.3rem;
`;

/* *
* =========== FeaturedCardLink =========== *
**/
export const FeaturedCardLink = styled.a`
    display: block;
    margin-top: 1.5rem;
    text-transform: capitalize;
    text-decoration: underline !important;
    font-size: 1.5rem;
    color: white;
`;