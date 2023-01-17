import styled from "styled-components";

/* *
* =========== NavbarListItems =========== *
**/
const CustomButton = styled.a`
    width: 14rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3.4rem 0.2rem;
    padding-block: 1rem;
    font-size: 1.4rem;
    font-weight: var(--fw-500);
    text-transform: capitalize;
    color: #fff;
    background-color: var(--primary-color);

    @media (min-width: 768px) {
        width: 28rem;
        font-size: 1.5rem;
    }
`;

export default CustomButton;