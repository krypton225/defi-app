import { LandingStyle } from "./Landing.styles";

import FirstLanding from "./FirstLanding";

import ExploreLanding from "./ExploreLanding";

import PassiveIncome from "./PassiveIncome";

const Landing = () => {
    return (
        <LandingStyle>
            <FirstLanding />
            <ExploreLanding />
            <PassiveIncome />
        </LandingStyle>
    )
}

export default Landing;