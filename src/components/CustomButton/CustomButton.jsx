import CustomButtonStyle from "./CustomButton.styles";

const CustomButton = ({ text, goTo = "" }) => {
    return (
        <CustomButtonStyle href={`${goTo}`}>
            {text}
        </CustomButtonStyle>
    )
}

export default CustomButton;