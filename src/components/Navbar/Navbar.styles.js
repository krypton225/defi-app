import styled from "styled-components";

/* *
    * =========== NavbarContainer =========== *
**/
export const NavbarContainer = styled.nav`
    width: 100%;
    position: relative;
    padding-block: 1.1rem;
    background-color: white;
`;

/* *
    * =========== NavbarContent =========== *
**/

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
`;

/* *
    * =========== LogoImageStyle =========== *
**/
export const LogoImageStyle = styled.div`
    width: 6.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* *
    * =========== NavbarListContainer =========== *
**/
export const NavbarListContainer = styled.ul`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

/* *
    * =========== NavbarListItems =========== *
**/
export const NavbarListItems = styled.li`
    margin-inline: 1rem;
    text-transform: capitalize;
`;

/* *
* =========== NavbarListItems =========== *
**/
export const NavbarLinkItems = styled.a`
   display: block;
   padding: 0.4rem 1rem;
   font-size: 1.6rem;
   font-weight: var(--fw-500);
   color: #000;
`;