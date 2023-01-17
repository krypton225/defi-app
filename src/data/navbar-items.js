import GenerateID from "../utils/generate-id";

const navbarItems = [
    {
        linkText: "home",
        pathLinkRoute: "/",
        // routeComponent:
        // sendTo:
    },
    {
        linkText: "featured",
        pathLinkRoute: "/featured",
        // routeComponent:
        // sendTo:
    },
    {
        linkText: "earn",
        pathLinkRoute: "/earn",
        // routeComponent:
        // sendTo:
    },
    {
        linkText: "contact",
        pathLinkRoute: "/contact",
        // routeComponent:
        // sendTo:
    },
];

(() => GenerateID(navbarItems))();

export default navbarItems;