import { LandingStyle } from "./Landing.styles";

import FirstLanding from "./FirstLanding";

import ExploreLanding from "./ExploreLanding";

const Landing = () => {
    return (
        <LandingStyle>
            <FirstLanding />
            <ExploreLanding />
        </LandingStyle>
    )
}

export default Landing;