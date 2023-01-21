import styled from "styled-components";

export const FooterMainStyle = styled.footer`
    width: 100%;
    position: relative;
    background-color: var(--secondary-color);
    
    &:before {
        content: "";
        width: 102%;
        height: 2.6rem;
        position: absolute;
        top: -1.4rem;
        left: 0;
        background-color: var(--secondary-color);
        transform: skewY(1deg);
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13rem;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: start;
        gap: 6rem;
    }

    @media (min-width: 768px) {
        align-items: start;
    }
`;

export const FooterContainerLists = styled.div`
    width: 100%;
    display: grid;
    gap: 3rem;
    
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
    }
`;

export const ColumnContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const FooterColumnTitle = styled.p`
    position: relative;
    margin-bottom: 2rem;
    font-size: 1.4rem;
    font-weight: var(--fw-700);
    text-transform: capitalize;

    &::after {
        content: "";
        width: 2.1rem;
        height: 0.4rem;
        border-radius: 1.4rem;
        position: absolute;
        bottom: -0.7rem;
        left: 0;
        background-color: var(--primary-color);
    }
`;

export const FooterList = styled.ul`
    width: 100%;
`;

export const FooterListItem = styled.li`
    width: 100%;
    display: block;
`;

export const FooterListItemLink = styled.a`
    width: 100%;
    display: block;
    margin-block: 0.8rem;
    padding-left: 0.3rem;
    font-size: 1.2rem;
    font-weight: var(--fw-700);
    text-transform: capitalize;
    color: #000;
    transition: color 0.3s ease-in;

    &:hover {
        color: var(--primary-color);
    }
`;