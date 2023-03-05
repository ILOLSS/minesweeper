/* eslint-disable */
import React from "react";
import styled from "styled-components";
import DivRow from "../atoms/DivRow";
import DivColumn from "../atoms/DivColumn";
import ControlPanel from "../organisms/ControlPanel";
import HorizontalBorder from "../molecules/borders/HorizontalBorder";
import VerticalBorder from "../molecules/borders/VerticalBorder";

const HomeWrap = styled(DivRow)`
    width: 550px;
    height: 600px;
    border-style: none;
    justify-content: start;
    align-items: center;
`;

function Home() {
    return (
        <HomeWrap>
            <VerticalBorder isRight={false} />
            <DivColumn>
                <HorizontalBorder />
            </DivColumn>
            <VerticalBorder isRight={true} />
        </HomeWrap>
    );
}

export default Home;
