/* eslint-disable */
import React from "react";
import styled from "styled-components";
import BorderDiv from "../atoms/BorderDiv";
import DivContainer from "../atoms/DivContainer";

const ControlPanelWrap = styled(DivContainer)`
    width: 100%;    
    height: 100px;
    border: 8px solid linear-gradient(to-right, blue, pink);
    border-bottom: none;
    border-image: linear-gradient(to bottom, #ffffff 20%, #bdbdbd 80%);
    background-color: blue;
`;

function ControlPanel() {
    return (
        <ControlPanelWrap>

        </ControlPanelWrap>
    );
}

export default ControlPanel;
