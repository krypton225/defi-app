import Container from "../../utils/container";

import {
    NavbarContainer,
    NavbarContent,
    NavbarLinkItems,
    NavbarListContainer,
    NavbarListItems
} from "./Navbar.styles";

import CustomButton from "../CustomButton/CustomButton";

import Logo from "../Logo/Logo";

const Navbar = () => {
    return (
        <NavbarContainer>
            <Container>
                <NavbarContent>
                    <Logo />

                    <NavbarListContainer>
                        <NavbarListItems>
                            <NavbarLinkItems href="/">home</NavbarLinkItems>
                        </NavbarListItems>

                        <NavbarListItems>
                            <NavbarLinkItems href="/">featured</NavbarLinkItems>
                        </NavbarListItems>

                        <NavbarListItems>
                            <NavbarLinkItems href="/">earn</NavbarLinkItems>
                        </NavbarListItems>

                        <NavbarListItems>
                            <NavbarLinkItems href="/">contact</NavbarLinkItems>
                        </NavbarListItems>
                    </NavbarListContainer>

                    <CustomButton goTo="/" text={"connect wallet"} />
                </NavbarContent>
            </Container>
        </NavbarContainer>
    )
}

export default Navbar;