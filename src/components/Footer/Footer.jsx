import Container from "../../utils/container";

import Logo from "../Logo/Logo";

import {
    FooterMainStyle,
    FooterContainer,
    FooterContainerLists,
    ColumnContainer,
    FooterColumnTitle,
    FooterList,
    FooterListItem,
    FooterListItemLink
} from "./FooterStyles";

import AllFooterItems from "../../data/footer-data";

const Footer = () => {
    return (
        <FooterMainStyle>
            <Container>
                <FooterContainer>
                    <Logo />

                    <FooterContainerLists>
                        {
                            AllFooterItems.map(({ id, listTitle, listDataLinks }) => (
                                <ColumnContainer key={id}>
                                    <FooterColumnTitle>{listTitle}</FooterColumnTitle>

                                    <FooterList>
                                        {
                                            listDataLinks.map(({ id, listDataName, listDataLink }) => (
                                                <FooterListItem key={id}>
                                                    <FooterListItemLink href={listDataLink}>
                                                        {listDataName}
                                                    </FooterListItemLink>
                                                </FooterListItem>
                                            ))
                                        }
                                    </FooterList>
                                </ColumnContainer>
                            ))
                        }
                    </FooterContainerLists>
                </FooterContainer>
            </Container>
        </FooterMainStyle>
    )
}

export default Footer;