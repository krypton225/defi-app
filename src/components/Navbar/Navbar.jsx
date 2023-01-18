import { useState } from "react";

import Container from "../../utils/container";

import {
    NavbarContainer,
    NavbarContent,
    NavbarLinkItems,
    NavbarListContainer,
    NavbarListItems,
    ToggleButton,
    ToggleLine
} from "./Navbar.styles";

import CustomButton from "../CustomButton/CustomButton";

import NavbarItemsArray from "../../data/navbar-items";

import Logo from "../Logo/Logo";

const Navbar = () => {
    const [isResponsive, setIsResponsive] = useState(false);

    const openNavbarHandler = () => {
        setIsResponsive(prev => !prev);
    };

    const closeNavbarWhenClickLink = () => setIsResponsive(false);

    return (
        <NavbarContainer>
            <Container>
                <NavbarContent>
                    <Logo />

                    <NavbarListContainer className={`${isResponsive ? "open-navbar-responsive" : ""}`}>
                        {
                            NavbarItemsArray.map(({ id, linkText, pathLinkRoute }) => (
                                <NavbarListItems key={id}>
                                    <NavbarLinkItems to={`${pathLinkRoute}`} onClick={closeNavbarWhenClickLink}>
                                        {linkText}
                                    </NavbarLinkItems>
                                </NavbarListItems>
                            ))
                        }
                    </NavbarListContainer>

                    <CustomButton goTo="/" text={"connect wallet"} />

                    <ToggleButton onClick={openNavbarHandler} title="Toggle Button" type="button">
                        <ToggleLine className={`${isResponsive ? "toggle-bar-first" : ""}`}></ToggleLine>
                        <ToggleLine className={`${isResponsive ? "toggle-bar-second" : ""}`}></ToggleLine>
                        <ToggleLine className={`${isResponsive ? "toggle-bar-third" : ""}`}></ToggleLine>
                    </ToggleButton>
                </NavbarContent>
            </Container>
        </NavbarContainer>
    )
}

export default Navbar;