import Container from "../../utils/container";

import {
    LogoImageStyle,
    NavbarContainer,
    NavbarContent,
    NavbarLinkItems,
    NavbarListContainer,
    NavbarListItems
} from "./Navbar.styles";

import LogoImage from "../../assets/svg/logo.svg";

import CustomButton from "../CustomButton/CustomButton";

const Navbar = () => {
    return (
        <NavbarContainer>
            <Container>
                <NavbarContent>
                    <LogoImageStyle>
                        <img src={LogoImage} alt="Logo" />
                    </LogoImageStyle>

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