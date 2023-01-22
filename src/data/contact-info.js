import GenerateID from "../utils/generate-id";

import { MdEmail, MdOutlinePlace } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";

const iconSize = 15;

const contactInfo = [
    {
        textInfo: "defi.support@defi.com",
        titleLink: "defi.support@defi.com",
        url: "mailto:defi.support@defi.com",
        iconInfo: <MdEmail size={iconSize} />
    },
    {
        textInfo: "(215) 979-8030",
        titleLink: "(215) 979-8030",
        url: "tel:(215) 979-8030",
        iconInfo: <BsFillTelephoneFill size={iconSize} />
    },
    {
        textInfo: "Two Logan Square, Suite 820, Philadelphia, PA 19103",
        titleLink: "Two Logan Square, Suite 820, Philadelphia, PA 19103",
        url: "https://www.google.com/maps/place/Two+Logan+Square,+Philadelphia,+PA+19103%D8%8C+%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9%E2%80%AD/@39.9556951,-75.1698145,17z/data=!4m6!3m5!1s0x89c6c633cfe92d41:0xe506236e68abd6b0!8m2!3d39.9556951!4d-75.1698145!16s%2Fm%2F02wzxs3",
        iconInfo: <MdOutlinePlace size={iconSize} />
    },
];

(() => GenerateID(contactInfo))();

export default contactInfo;