import { LogoImageStyle, MainLogo } from "./Logo.styles";

import LogoImage from "../../assets/svg/logo.svg";

const Logo = () => {
    return (
        <MainLogo>
            <a href="/">
                <LogoImageStyle>
                    <img src={LogoImage} alt="Logo" />
                </LogoImageStyle>
            </a>
        </MainLogo>
    )
}

export default Logo;