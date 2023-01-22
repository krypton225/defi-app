import { useEffect } from "react";

import { LandingStyle } from "./Landing.styles";

import FirstLanding from "./FirstLanding";

import ExploreLanding from "./ExploreLanding";

import PassiveIncome from "./PassiveIncome";

const Landing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LandingStyle>
            <FirstLanding />
            <ExploreLanding />
            <PassiveIncome />
        </LandingStyle>
    )
}

export default Landing;