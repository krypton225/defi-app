import styled from "styled-components";

const Container = styled.div`
    height: 100%;
    padding-inline: 1.8rem;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 768px) {
        width: 750px;
    }

    @media (min-width: 992px) {
        width: 970px;
    }

    @media (min-width: 1200px) {
        width: 1170px;
    }
`;

export default Container;