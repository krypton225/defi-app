import styled from "styled-components";

/* *
    * =========== NavbarContainer =========== *
**/
export const NavbarContainer = styled.nav`
    width: 100%;
    border-bottom: 1px solid #eee;
    position: relative;
    padding-block: 0.9rem;
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