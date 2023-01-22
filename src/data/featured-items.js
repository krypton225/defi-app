import GenerateID from "../utils/generate-id";

import { BsLightbulb } from "react-icons/bs";
import { TbReportSearch } from "react-icons/tb";
import { GiJeweledChalice } from "react-icons/gi";
import { GoPerson } from "react-icons/go";

const featuredItems = [
    {
        icon: <BsLightbulb />,
        title: "strategy",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quisquam recusandae. Modi, rerum nihil.",
        link: { text: "more", url: "/" }
    },
    {
        icon: <TbReportSearch />,
        title: "results",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quisquam recusandae. Modi, rerum nihil.",
        link: { text: "more", url: "/" }
    },
    {
        icon: <GiJeweledChalice />,
        title: "expertise",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quisquam recusandae. Modi, rerum nihil.",
        link: { text: "more", url: "/" }
    },
    {
        icon: <GoPerson />,
        title: "support",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, quisquam recusandae. Modi, rerum nihil.",
        link: { text: "more", url: "/" }
    },
];

(() => GenerateID(featuredItems))();

export default featuredItems;