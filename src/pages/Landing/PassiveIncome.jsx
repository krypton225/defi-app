import Container from "../../utils/container";

import {
    PassiveIncomeStyle,
    PassiveIncomeContentStyle,
    PassiveIncomeLeftStyle,
    PassiveIncomeRightStyle,
    PassiveIncomeRightTitle,
    PassiveIncomeRightDescription,
    ContainerLandingButtons,
} from "./Landing.styles"

import PassiveIncomeImage from "../../assets/images/trade.webp";

import CustomButton from "../../components/CustomButton/CustomButton";

const PassiveIncome = () => {
    return (
        <PassiveIncomeStyle>
            <Container>
                <PassiveIncomeContentStyle>
                    <PassiveIncomeLeftStyle>
                        <img src={PassiveIncomeImage} alt="" />
                    </PassiveIncomeLeftStyle>

                    <PassiveIncomeRightStyle>
                        <PassiveIncomeRightTitle>
                            earn passive income with crypto.
                        </PassiveIncomeRightTitle>

                        <PassiveIncomeRightDescription>
                            Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits.
                        </PassiveIncomeRightDescription>

                        <ContainerLandingButtons>
                            <CustomButton goTo="/contact" text={"enter your email"} bgColor="bg-color-2" />
                            <CustomButton goTo="/" text={"learn more"} bgColor="bg-color-1" />
                        </ContainerLandingButtons>
                    </PassiveIncomeRightStyle>
                </PassiveIncomeContentStyle>
            </Container>
        </PassiveIncomeStyle>
    );
};

export default PassiveIncome;