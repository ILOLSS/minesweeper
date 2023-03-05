import styled from "styled-components";
import DivContainer from "./DivContainer";

const BorderDiv = styled(DivContainer)`
    width: 100%;
    height: 100%;
    border: 12px solid #bdbdbd;
    border-bottom: ${props => props.isBottom ? "solid" : "none"};
`;

export default BorderDiv;
