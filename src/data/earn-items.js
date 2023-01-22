import GenerateID from "../utils/generate-id";

import { GiCheckMark } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const giCheckIconSize = 12;
const idCloseIconSize = 18;

const earnItems = [
    {
        titleText: "basics",
        priceText: "30",
        benefits: [
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Android & iOS App" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Splash Screen" },
            { iconBefore: <IoMdClose size={idCloseIconSize} />, text: "Publishing to Play Store" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Delivery within 24 Hours" },
        ]
    },
    {
        titleText: "basics 2",
        priceText: "50",
        benefits: [
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Android & iOS App" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Splash Screen" },
            { iconBefore: <IoMdClose size={idCloseIconSize} />, text: "Publishing to Play Store" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Delivery within 17 Hours" },
        ]
    },
    {
        titleText: "standard",
        priceText: "140",
        benefits: [
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Android & iOS App" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Splash Screen" },
            { iconBefore: <IoMdClose size={idCloseIconSize} />, text: "Publishing to Play Store" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Delivery within 10 Hours" },
        ]
    },
    {
        titleText: "ADVANCED",
        priceText: "260",
        benefits: [
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Android & iOS App" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Splash Screen" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Publishing to Play Store" },
            { iconBefore: <GiCheckMark size={giCheckIconSize} />, text: "Delivery within 24 Hours" },
        ]
    },
];

(() => {
    GenerateID(earnItems);

    for (let i = 0; i < earnItems.length; i++) {
        GenerateID(earnItems[i].benefits);
    }
})();

export default earnItems;