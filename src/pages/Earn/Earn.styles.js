import styled from "styled-components";

/* *
* =========== EarnCardsContainer =========== *
**/
export const EarnCardsContainer = styled.div`
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
* =========== EarnCardTitle =========== *
**/
export const EarnCardTitle = styled.p`
    text-transform: capitalize;
    font-size: 3.7rem;
    font-weight: 500;
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;

    @media (max-width: 767px) {
        text-align: start !important;
    }
`;

/* *
* =========== EarnCardPrice =========== *
**/
export const EarnCardPrice = styled.div`
    margin-top: 1.4rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        justify-content: start;
    }
`;

/* *
* =========== EarnCardPriceNumber =========== *
**/
export const EarnCardPriceNumber = styled.p`
    color: var(--primary-color);
    font-size: 3.8rem;
    font-weight: var(--fw-700);
    transition: all 0.3s ease-in-out;
`;

/* *
* =========== EarnCardPriceTime =========== *
**/
export const EarnCardPriceTime = styled.p`
    margin-left: 0.8rem;
    font-size: 1.8rem;
`;

/* *
* =========== EarnCardBenefits =========== *
**/
export const EarnCardBenefits = styled.ul`
    padding-left: 3rem;
    margin-block: 1.4rem;
    text-align: center;
    transition: all 0.3s ease-in-out;

    @media (max-width: 767px) {
        padding-left: 0;
    }
`;

/* *
* =========== EarnCardBenefitsItem =========== *
**/
export const EarnCardBenefitsItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    text-align: center;
    transition: all 0.3s ease-in-out;
`;

/* *
* =========== EarnCardBenefitsItemIcon =========== *
**/
export const EarnCardBenefitsItemIcon = styled.span`
    margin-right: 1rem;
    font-size: 2rem;
    color: var(--primary-color);
    line-height: 1.8rem;
    transition: all 0.3s ease-in-out;

    @media (max-width: 650px) {
        margin-right: 0.4rem;
    }
`;

/* *
* =========== EarnCardBenefitsItemText =========== *
**/
export const EarnCardBenefitsItemText = styled.p`
    margin-block: 1rem;
    font-size: 1.3rem;
    font-weight: var(--fw-700);
    color: var(--primary-color);
    transition: all 0.3s ease-in-out;

    @media (max-width: 650px) {
        font-size: 1.1rem;
    }
`;

/* *
* =========== EarnCardOrderButton =========== *
**/
export const EarnCardOrderButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 650px) {
        justify-content: start !important;
    }
`;

/* *
* =========== EarnCardOrderButton =========== *
**/
export const EarnCardOrderButton = styled.button`
    padding: 0.7rem 3rem;
    border: 0.2rem solid var(--primary-color);
    border-radius: 0.6rem;
    text-transform: capitalize;
    font-size: 1.3rem;
    font-weight: var(--fw-700);
    color: var(--primary-color);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
`;

/* *
* =========== EarnCard =========== *
**/
export const EarnCard = styled.div`
    width: 100%;
    padding: 5rem 1rem 5rem 2rem;
    margin-inline: auto;
    border-radius: 1.3rem;
    border: 0.1rem solid var(--primary-color);
    color: #000;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: var(--primary-color);
        color: white;
    }

    &:hover > ${EarnCardTitle} {
        color: white;
    }

    &:hover ${EarnCardPriceNumber} {
        color: white;
    }

    &:hover ${EarnCardBenefitsItemIcon} {
        color: white;
    }

    &:hover ${EarnCardBenefitsItemText} {
        color: white;
    }
    
    @media (max-width: 649px) {
        width: 85%;
    }
    
    @media (min-width: 651px) and (max-width: 690px) {
        width: 60%;
    }
    
    @media (min-width: 650px) and (max-width: 700px) {
        width: 65%;
    }
    
    @media (min-width: 701px) {
        width: 60%;
    }
    
    @media (min-width: 768px) {
        width: 100%;
    }
`;