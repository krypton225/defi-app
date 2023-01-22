import { SectionTitleStyle } from "./SectionTitle.styles";

const SectionTitle = ({ text }) => {
    return (
        <SectionTitleStyle>{text}</SectionTitleStyle>
    );
};

export default SectionTitle;