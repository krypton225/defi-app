import CustomButtonStyle from "./CustomButton.styles";

const CustomButton = ({ text, goTo = "", bgColor = "" }) => {
    return (
        <CustomButtonStyle href={`${goTo}`} className={`${bgColor}`}>
            {text}
        </CustomButtonStyle>
    )
}

export default CustomButton;