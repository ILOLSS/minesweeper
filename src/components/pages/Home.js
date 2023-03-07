/* eslint-disable */
import React from "react";
import styled from "styled-components";
import DivRow from "../atoms/DivRow";
import DivColumn from "../atoms/DivColumn";
import ControlPanel from "../organisms/ControlPanel";
import HorizontalBorder from "../molecules/borders/HorizontalBorder";
import VerticalBorder from "../molecules/borders/VerticalBorder";
import RightBorder from "../molecules/borders/RightBorder";
import RightBorderImage from "../../assets/right_border.png"
import LeftBorderImage from "../../assets/left_border.png"
import TopBorderImage from "../../assets/top_border.png"
import BottomBorderImage from "../../assets/bottom_border.png"
import DividerImage from "../../assets/divider.png"
import PlayingField from "../organisms/PlayingField";

const HomeWrap = styled(DivRow)`
    width: 550px;
    height: 635px;
    border-style: none;
    justify-content: start;
    align-items: center;
`;

function Home() {
    return (
        <HomeWrap>
            <VerticalBorder src={LeftBorderImage} />
            <DivColumn>
                <HorizontalBorder src={TopBorderImage} />
                <ControlPanel />
                <HorizontalBorder src={DividerImage} />
                <PlayingField />
                <HorizontalBorder src={BottomBorderImage} />
            </DivColumn>
            <VerticalBorder src={RightBorderImage} />
        </HomeWrap>
    );
}

export default Home;
