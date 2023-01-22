import { Fragment } from "react";

import Container from "../../utils/container";

import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

import AllEarnItems from "../../data/earn-items";

import {
    EarnCard,
    EarnCardBenefits,
    EarnCardBenefitsItem,
    EarnCardBenefitsItemIcon,
    EarnCardBenefitsItemText,
    EarnCardOrderButton,
    EarnCardOrderButtonContainer,
    EarnCardPrice,
    EarnCardPriceNumber,
    EarnCardPriceTime,
    EarnCardsContainer,
    EarnCardTitle,
    EarnTitle
} from "./Earn.styles";

const Earn = () => {
    return (
        <section>
            <Container>
                <EarnTitle>Our services for earnings</EarnTitle>

                <EarnCardsContainer>
                    {
                        AllEarnItems.map(({ id, titleText, priceText, benefits }) => (
                            <EarnCard key={id}>
                                <EarnCardTitle>{titleText}</EarnCardTitle>

                                <EarnCardPrice>
                                    <EarnCardPriceNumber>&#x20AC; {priceText}</EarnCardPriceNumber>
                                    <EarnCardPriceTime> / One-time</EarnCardPriceTime>
                                </EarnCardPrice>

                                <EarnCardBenefits>
                                    {
                                        benefits.map(({ id, iconBefore, text }) => (
                                            <Fragment key={id}>
                                                <EarnCardBenefitsItem>
                                                    <EarnCardBenefitsItemIcon>
                                                        {iconBefore}
                                                    </EarnCardBenefitsItemIcon>

                                                    <EarnCardBenefitsItemText>
                                                        {text}
                                                    </EarnCardBenefitsItemText>
                                                </EarnCardBenefitsItem>
                                            </Fragment>
                                        ))
                                    }
                                </EarnCardBenefits>

                                <EarnCardOrderButtonContainer>
                                    <EarnCardOrderButton title="order now">order now</EarnCardOrderButton>
                                </EarnCardOrderButtonContainer>
                            </EarnCard>
                        ))
                    }
                </EarnCardsContainer>
            </Container>
        </section >
    )
}

export default Earn;