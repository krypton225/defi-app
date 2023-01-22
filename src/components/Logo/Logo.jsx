import { Link } from "react-router-dom";

import { LogoImageStyle, MainLogo } from "./Logo.styles";

import LogoImage from "../../assets/svg/logo.svg";

const Logo = () => {
    return (
        <MainLogo>
            <Link to="/" title="Defi">
                <LogoImageStyle>
                    <img src={LogoImage} alt="Logo" />
                </LogoImageStyle>
            </Link>
        </MainLogo>
    )
}

export default Logo;