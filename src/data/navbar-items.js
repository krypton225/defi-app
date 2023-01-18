import GenerateID from "../utils/generate-id";

import Landing from "../pages/Landing/Landing";

import Featured from "../pages/Featured/Featured";

import Earn from "../pages/Earn/Earn";

import Contact from "../pages/Contact/Contact";

const navbarItems = [
    {
        linkText: "home",
        pathLinkRoute: "/",
        routeComponent: <Landing />
    },
    {
        linkText: "featured",
        pathLinkRoute: "/featured",
        routeComponent: <Featured />
    },
    {
        linkText: "earn",
        pathLinkRoute: "/earn",
        routeComponent: <Earn />
    },
    {
        linkText: "contact",
        pathLinkRoute: "/contact",
        routeComponent: <Contact />
    },
];

(() => GenerateID(navbarItems))();

export default navbarItems;