import styled from "styled-components";

/* *
* =========== EarnCardTitle =========== *
**/
export const ContactContainer = styled.div`
    width: 100%;
    display: grid;
    align-items: start;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

/* *
* =========== EarnCardTitle =========== *
**/
export const ContactGetTouch = styled.div`
    width: 100%;
`;

/* *
* =========== ContactGetTouchTitle =========== *
**/
export const ContactGetTouchTitle = styled.p`
    position: relative;
    margin-bottom: 1.7rem;
    font-size: 2.3rem;

    &::after {
        content: "";
        width: 5rem;
        height: 0.3rem;
        border-radius: 2rem;
        position: absolute;
        bottom: -0.3rem;
        left: 0;
        background-color: var(--primary-color);
    }
`;

/* *
* =========== ContactGetTouchLinks =========== *
**/
export const ContactGetTouchLinks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

/* *
* =========== ContactGetTouchLinksContainer =========== *
**/
export const ContactGetTouchLinksContainer = styled.a`
    width: 100%;
    margin-block: 1.1rem;
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 500;
    color: var(--primary-color);
`;

/* *
* =========== ContactGetTouchLinksIcon =========== *
**/
export const ContactGetTouchLinksIcon = styled.div`
    line-height: 1.2rem;
`;

/* *
* =========== ContactGetTouchLinksTextLink =========== *
**/
export const ContactGetTouchLinksTextLink = styled.p`
    margin-left: 0.8rem;
    color: var(--primary-color);
`;

/* *
* =========== ContactForm =========== *
**/
export const ContactForm = styled.form``;