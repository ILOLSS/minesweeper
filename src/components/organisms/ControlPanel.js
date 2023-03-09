/* eslint-disable */
import React from "react";
import styled from "styled-components";
import BorderDiv from "../atoms/BorderDiv";
import DivContainer from "../atoms/DivContainer";
import DivRow from "../atoms/DivRow";
import ImageFromSprite from "../molecules/ImageFromSprite";

const ControlPanelWrap = styled(DivRow)`
    width: 100%;    
    height: 64px;
    border: none;
    background-color: #c0c0c0;
    padding: 0 12px;
    justify-content: space-between;
    align-items: center;
`;

const Smile = styled(ImageFromSprite)`
    width: 26px;
    height: 26px;
    background-position: 0 -24px;
`;

function ControlPanel() {
    return (
        <ControlPanelWrap>
            <Smile onClick={() => console.log(1)}/>
        </ControlPanelWrap>
    );
}

export default ControlPanel;
