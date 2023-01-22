import { useEffect } from "react";

import Container from "../../utils/container";

import {
    ContactContainer,
    ContactForm,
    ContactFormInput,
    ContactFormTextArea,
    ContactGetTouch,
    ContactGetTouchLinks,
    ContactGetTouchLinksContainer,
    ContactGetTouchLinksIcon,
    ContactGetTouchLinksTextLink,
    ContactGetTouchTitle
} from "./Contact.styles";

import AllContactInfo from "../../data/contact-info";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            <Container>
                <ContactContainer>
                    <ContactGetTouch>
                        <ContactGetTouchTitle>
                            Get in touch with us
                        </ContactGetTouchTitle>

                        <ContactGetTouchLinks>
                            {
                                AllContactInfo.map(({ id, textInfo, titleLink, url, iconInfo }) => (
                                    <ContactGetTouchLinksContainer key={id} href={url} title={titleLink} target="_blank">
                                        <ContactGetTouchLinksIcon>
                                            {iconInfo}
                                        </ContactGetTouchLinksIcon>

                                        <ContactGetTouchLinksTextLink>
                                            {textInfo}
                                        </ContactGetTouchLinksTextLink>
                                    </ContactGetTouchLinksContainer>
                                ))
                            }
                        </ContactGetTouchLinks>
                    </ContactGetTouch>

                    <ContactForm>
                        <ContactFormInput type="text" placeholder="first name" autoComplete="new-password"></ContactFormInput>

                        <ContactFormInput type="text" placeholder="second name" autoComplete="new-password"></ContactFormInput>

                        <ContactFormInput type="email" placeholder="email" autoComplete="new-password"></ContactFormInput>

                        <ContactFormTextArea placeholder="message"></ContactFormTextArea>
                    </ContactForm>
                </ContactContainer>
            </Container>
        </section>
    )
}

export default Contact;