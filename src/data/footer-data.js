import GenerateID from "../utils/generate-id";

import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const footerItems = [
    {
        listTitle: "support",
        listDataLinks: [
            { listDataName: "contact us", linkTitle: "Contact Us", listDataLink: "/" },
            { listDataName: "chat", linkTitle: "Chat", listDataLink: "/" },
            { listDataName: "help center", linkTitle: "Help Center", listDataLink: "/" },
            { listDataName: "FAQ", linkTitle: "FAQ", listDataLink: "/" },
        ],
    },
    {
        listTitle: "developers",
        listDataLinks: [
            { listDataName: "cloud", linkTitle: "Cloud", listDataLink: "/" },
            { listDataName: "commerce", linkTitle: "Commerce", listDataLink: "/" },
            { listDataName: "pro", linkTitle: "Pro", listDataLink: "/" },
            { listDataName: "API", linkTitle: "API", listDataLink: "/" },
        ],
    },
    {
        listTitle: "company",
        listDataLinks: [
            { listDataName: "about", linkTitle: "About", listDataLink: "/" },
            { listDataName: "information", linkTitle: "Information", listDataLink: "/" },
            { listDataName: "legal", linkTitle: "Legal", listDataLink: "/" },
            { listDataName: "privacy", linkTitle: "Privacy", listDataLink: "/" },
        ],
    },
    {
        listTitle: "social",
        listDataLinks: [
            { listDataName: <BsFacebook />, linkTitle: "Facebook", listDataLink: "/" },
            { listDataName: <BsTwitter />, linkTitle: "Twitter", listDataLink: "/" },
            { listDataName: <BsLinkedin />, linkTitle: "LinkedIn", listDataLink: "/" },
            { listDataName: <BsGithub />, linkTitle: "Github", listDataLink: "/" },
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