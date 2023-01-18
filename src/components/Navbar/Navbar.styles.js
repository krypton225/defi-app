import { Link } from "react-router-dom";
import styled from "styled-components";

/* *
    * =========== NavbarContainer =========== *
**/
export const NavbarContainer = styled.nav`
    width: 100%;
    border-bottom: 1px solid #eee;
    position: fixed;
    top: 0;
    left: 0;
    padding-block: 0.9rem;
    background-color: white;
    z-index: 999999999;
`;

/* *
    * =========== NavbarContent =========== *
**/

export const NavbarContent = styled.div`
    display: flex;
    justify-content: space-between;
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

    @media (max-width: 768px) {
        width: 25rem;
        height: 100vh;
        border-left: 1px solid #eee;
        position: fixed;
        top: 0;
        right: -200%;
        flex-direction: column;
        background-color: white;
        z-index: 9999999;
        transition: all 0.5s ease-in-out;
    }

    @media (max-width: 767px) {
        width: 100%;
        border: none;
    }
`;

/* *
    * =========== NavbarListItems =========== *
**/
export const NavbarListItems = styled.li`
    margin-inline: 1rem;
    padding-block: 0.8rem;
    text-transform: capitalize;
`;

/* *
* =========== NavbarListItems =========== *
**/
export const NavbarLinkItems = styled(Link)`
   display: block;
   padding: 0.5rem 1rem;
   font-size: 1.7rem;
   font-weight: 600;
   color: #000;

   &:hover {
    color: var(--primary-color);
    transition: all 0.3s ease-out;
   }

   @media (max-width: 768px) {
    font-size: 2.1rem;
    margin-block: 1.3rem;
   }
`;

/* *
* =========== ToggleButton =========== *
**/
export const ToggleButton = styled.button`
   width: 3.8rem;
   height: 1.8rem;
   border: none;
   outline: none;
   display: none;
   flex-direction: column;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;
   background-color: white;
   z-index: 9999999;

   @media (max-width: 768px) {
    display: flex;
   }
`;

/* *
* =========== ToggleLine =========== *
**/
export const ToggleLine = styled.span`
   width: 100%;
   height: 0.3rem;
   display: block;
   border-radius: 0.4rem;
   background-color: #000;
   transition: all 0.5s ease-in-out;
`;