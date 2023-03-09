/* eslint-disable */
import styled from "styled-components";
import Sprite from "../../assets/minesweeper_sprite.png"

const ImageFromSprite = styled.div`
    box-sizing: border-box;
    background-image: url(${Sprite});
    background-repeat: no-repeat;
    zoom: 2;
`

export default ImageFromSprite;
