import { useEffect, useState } from "react";

import axios from "axios";

import Container from "../../utils/container";

import {
    LandingStyle,
    Explore,
    ExploreContent,
    ExploreLeft,
    ExploreRight,
    ExploreLeftTitle,
    ExploreLeftDescription,
    ExploreLeftButton,
    ExploreRightRow,
    ExploreRightRowData,
    ExploreRightRowDataItem,
    ExploreRightRowDataItemName,
    ExploreRightRowDataItemImage,
    ExploreRightRowDataItemPrice,
    ExploreRightRowDataItemATL,
} from "./Landing.styles";

import CustomButton from "../../components/CustomButton/CustomButton";

import FirstLanding from "./FirstLanding";

const URL =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false`;

const Landing = () => {

    const [dataFromAPI, setDataFromAPI] = useState([]);

    useEffect(() => {
        axios.get(URL).then((data) => setDataFromAPI(data.data));
    }, []);

    return (
        <LandingStyle>
            <FirstLanding />

            <Explore>
                <Container>
                    <ExploreContent>
                        <ExploreLeft>
                            <ExploreLeftTitle>
                                explore top crypto's like bitcoin, ethereum, and dogecoin
                            </ExploreLeftTitle>

                            <ExploreLeftDescription>
                                see all available assets: cryptocurrencies and NFT's
                            </ExploreLeftDescription>

                            <ExploreLeftButton>
                                <CustomButton goTo="/" text={"see more coins"} bgColor="bg-color-1" />
                            </ExploreLeftButton>
                        </ExploreLeft>

                        <ExploreRight>
                            <ExploreRightRow>
                                <ExploreRightRowData>
                                    {
                                        dataFromAPI.map(({ id, name, image, current_price, atl }) => (
                                            <ExploreRightRowDataItem key={id}>
                                                <ExploreRightRowDataItemImage>
                                                    <img src={image} alt="Coin" />
                                                </ExploreRightRowDataItemImage>

                                                <ExploreRightRowDataItemName>
                                                    {name}
                                                </ExploreRightRowDataItemName>

                                                <ExploreRightRowDataItemPrice>
                                                    {current_price}
                                                </ExploreRightRowDataItemPrice>

                                                <ExploreRightRowDataItemATL>
                                                    {+atl.toFixed(2)}
                                                </ExploreRightRowDataItemATL>
                                            </ExploreRightRowDataItem>
                                        ))
                                    }
                                </ExploreRightRowData>
                            </ExploreRightRow>
                        </ExploreRight>
                    </ExploreContent>
                </Container>
            </Explore>
        </LandingStyle>
    )
}

export default Landing;