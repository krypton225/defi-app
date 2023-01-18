import CustomButtonStyle from "./CustomButton.styles";

const CustomButton = ({ text, goTo = "", bgColor = "" }) => {
    return (
        <CustomButtonStyle to={`${goTo}`} className={`${bgColor}`}>
            {text}
        </CustomButtonStyle>
    )
}

export default CustomButton;