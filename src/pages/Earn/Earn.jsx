import { Fragment, useEffect } from "react";

import Container from "../../utils/container";

import SectionTitle from "../../components/Global/SectionTitle";

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
} from "./Earn.styles";

const Earn = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Container>
                <SectionTitle text={"Our services for earnings"} />

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