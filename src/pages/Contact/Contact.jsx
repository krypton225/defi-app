import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <section>
            Contact
        </section>
    )
}

export default Contact;