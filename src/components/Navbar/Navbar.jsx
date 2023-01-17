import Container from "../../utils/container";

import {
    NavbarContainer,
    NavbarContent,
    NavbarLinkItems,
    NavbarListContainer,
    NavbarListItems
} from "./Navbar.styles";

import CustomButton from "../CustomButton/CustomButton";

import NavbarItemsArray from "../../data/navbar-items";

import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <NavbarContainer>
            <Container>
                <NavbarContent>
                    <Logo />

                    <NavbarListContainer>
                        {
                            NavbarItemsArray.map(({ id, linkText, pathLinkRoute }) => (
                                <NavbarListItems key={id}>
                                    <NavbarLinkItems href={`${pathLinkRoute}`}>
                                        {linkText}
                                    </NavbarLinkItems>
                                </NavbarListItems>
                            ))
                        }
                    </NavbarListContainer>

                    <CustomButton goTo="/" text={"connect wallet"} />
                </NavbarContent>
            </Container>
        </NavbarContainer>
    )
}

export default Navbar;