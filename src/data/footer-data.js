import GenerateID from "../utils/generate-id";

import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const footerItems = [
    {
        listTitle: "support",
        listDataLinks: [
            { listDataName: "contact us", listDataLink: "/" },
            { listDataName: "chat", listDataLink: "/" },
            { listDataName: "help center", listDataLink: "/" },
            { listDataName: "FAQ", listDataLink: "/" },
        ],
    },
    {
        listTitle: "developers",
        listDataLinks: [
            { listDataName: "cloud", listDataLink: "/" },
            { listDataName: "commerce", listDataLink: "/" },
            { listDataName: "pro", listDataLink: "/" },
            { listDataName: "API", listDataLink: "/" },
        ],
    },
    {
        listTitle: "company",
        listDataLinks: [
            { listDataName: "about", listDataLink: "/" },
            { listDataName: "information", listDataLink: "/" },
            { listDataName: "legal", listDataLink: "/" },
            { listDataName: "privacy", listDataLink: "/" },
        ],
    },
    {
        listTitle: "social",
        listDataLinks: [
            { listDataName: <BsFacebook />, listDataLink: "/" },
            { listDataName: <BsTwitter />, listDataLink: "/" },
            { listDataName: <BsLinkedin />, listDataLink: "/" },
            { listDataName: <BsGithub />, listDataLink: "/" },
        ],
    },
];

(() => {
    GenerateID(footerItems);

    for (let i = 0; i < footerItems.length; i++) {
        GenerateID(footerItems[i].listDataLinks);
    }
})();

export default footerItems;