import Container from "../../utils/container";

import { LandingStyle, LandingContent, LeftLandingContent, DescriptionLeftLandingContent, TitleLeftLandingContent, RightLandingContent } from "./Landing.styles";

import LandingImage from "../../assets/images/hero-img.png";

const Landing = () => {
    return (
        <LandingStyle>
            <Container>
                <LandingContent>
                    <LeftLandingContent>
                        <DescriptionLeftLandingContent>
                            buy & sell crypto 24/7 using your retirement account
                        </DescriptionLeftLandingContent>

                        <TitleLeftLandingContent>invest in cryptocurrency with your IRA</TitleLeftLandingContent>

                        <DescriptionLeftLandingContent>
                            buy, sell and store hundreds of cryptocurrencies
                        </DescriptionLeftLandingContent>
                    </LeftLandingContent>

                    <RightLandingContent>
                        <img src={LandingImage} alt="Hero Landing" draggable="false" />
                    </RightLandingContent>
                </LandingContent>
            </Container>
        </LandingStyle>
    )
}

export default Landing;