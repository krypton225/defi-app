import GenerateID from "../utils/generate-id";

import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const footerItems = [
    {
        listTitle: "support",
        listDataLinks: [
            { listDataName: "contact us", linkTitle: "contact us", listDataLink: "/" },
            { listDataName: "chat", linkTitle: "chat", listDataLink: "/" },
            { listDataName: "help center", linkTitle: "help center", listDataLink: "/" },
            { listDataName: "FAQ", linkTitle: "FAQ", listDataLink: "/" },
        ],
    },
    {
        listTitle: "developers",
        listDataLinks: [
            { listDataName: "cloud", linkTitle: "cloud", listDataLink: "/" },
            { listDataName: "commerce", linkTitle: "commerce", listDataLink: "/" },
            { listDataName: "pro", linkTitle: "pro", listDataLink: "/" },
            { listDataName: "API", linkTitle: "API", listDataLink: "/" },
        ],
    },
    {
        listTitle: "company",
        listDataLinks: [
            { listDataName: "about", linkTitle: "about", listDataLink: "/" },
            { listDataName: "information", linkTitle: "information", listDataLink: "/" },
            { listDataName: "legal", linkTitle: "legal", listDataLink: "/" },
            { listDataName: "privacy", linkTitle: "privacy", listDataLink: "/" },
        ],
    },
    {
        listTitle: "social",
        listDataLinks: [
            { listDataName: <BsFacebook />, linkTitle: "facebook", listDataLink: "/" },
            { listDataName: <BsTwitter />, linkTitle: "twitter", listDataLink: "/" },
            { listDataName: <BsLinkedin />, linkTitle: "linkedIn", listDataLink: "/" },
            { listDataName: <BsGithub />, linkTitle: "github", listDataLink: "/" },
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