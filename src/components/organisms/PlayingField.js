/* eslint-disable */
import React from "react";
import styled from "styled-components";
import DivContainer from "../atoms/DivContainer";
import DivRow from "../atoms/DivRow";
import { useDispatch } from "react-redux";
import { openCell } from "../../redux/reducer";

const PlayingFieldWrap = styled(DivRow)`
    height: 512px;
    width: 100%;
    background-color: #c0c0c0;
    padding: 0;
    flex-wrap: wrap;
`;

function PlayingField() {

    const dispatch = useDispatch();

    dispatch(openCell(0, 0));

    return (
        <PlayingFieldWrap>

        </PlayingFieldWrap>
    );
}

export default PlayingField;
