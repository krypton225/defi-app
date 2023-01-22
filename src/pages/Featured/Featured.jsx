import Container from "../../utils/container";

import {
    FeaturedTitle,
    FeaturedCardsContainer,
    FeaturedCard,
    FeaturedCardIcon,
    FeaturedCardTitle,
    FeaturedCardDescription,
    FeaturedCardLink,
} from "./Featured.styles";

import AllFeaturedItems from "../../data/featured-items";

const Featured = () => {
    return (
        <section>
            <Container>
                <FeaturedTitle>featured items</FeaturedTitle>

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