import GenerateID from "../utils/generate-id";

import Landing from "../pages/Landing/Landing";

import Featured from "../pages/Featured/Featured";

import Earn from "../pages/Earn/Earn";

import Contact from "../pages/Contact/Contact";

const navbarItems = [
    {
        linkText: "home",
        linkTitle: "Home",
        pathLinkRoute: "/",
        routeComponent: <Landing />
    },
    {
        linkText: "featured",
        linkTitle: "Featured",
        pathLinkRoute: "/featured",
        routeComponent: <Featured />
    },
    {
        linkText: "earn",
        linkTitle: "Earn",
        pathLinkRoute: "/earn",
        routeComponent: <Earn />
    },
    {
        linkText: "contact",
        linkTitle: "Contact",
        pathLinkRoute: "/contact",
        routeComponent: <Contact />
    },
];

(() => GenerateID(navbarItems))();

export default navbarItems;