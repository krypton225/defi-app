import Container from "../../utils/container";

import {
    LandingStyle,
    LandingContent,
    LeftLandingContent,
    DescriptionLeftLandingContent,
    TitleLeftLandingContent,
    ContainerLandingButtons,
    RightLandingContent
} from "./Landing.styles";

import LandingImage from "../../assets/images/hero-img.png";

import CustomButton from "../../components/CustomButton/CustomButton";

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

                        <ContainerLandingButtons>
                            <CustomButton goTo="/contact" text={"enter your email"} bgColor="bg-color-2" />
                            <CustomButton goTo="/" text={"learn more"} bgColor="bg-color-1" />
                        </ContainerLandingButtons>
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