import Container from "../../utils/container";

import {
    ContainerLandingButtons,
    DescriptionLeftLandingContent,
    LandingContent,
    LeftLandingContent,
    RightLandingContent,
    TitleLeftLandingContent
} from "./Landing.styles";

import CustomButton from "../../components/CustomButton/CustomButton";

import LandingImage from "../../assets/images/hero-img.webp";

const FirstLanding = () => {
    return (
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
    );
};

export default FirstLanding;