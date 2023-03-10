import { useEffect } from "react";

import Container from "../../utils/container";

import SectionTitle from "../../components/Global/SectionTitle";

import {
    FeaturedCardsContainer,
    FeaturedCard,
    FeaturedCardIcon,
    FeaturedCardTitle,
    FeaturedCardDescription,
    FeaturedCardLink,
} from "./Featured.styles";

import AllFeaturedItems from "../../data/featured-items";

const Featured = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Container>
                <SectionTitle text={"featured items"} />

                <FeaturedCardsContainer>
                    {
                        AllFeaturedItems.map(({ id, icon, title, description, link: { text, url } }) => (
                            <FeaturedCard key={id}>
                                <FeaturedCardIcon>
                                    {icon}
                                </FeaturedCardIcon>

                                <FeaturedCardTitle>
                                    {title}
                                </FeaturedCardTitle>

                                <FeaturedCardDescription>
                                    {description}
                                </FeaturedCardDescription>

                                <FeaturedCardLink href={url}>
                                    {text}
                                </FeaturedCardLink>
                            </FeaturedCard>
                        ))
                    }

                </FeaturedCardsContainer>
            </Container>
        </section>
    )
}

export default Featured;