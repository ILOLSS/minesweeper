/* eslint-disable */
import styled from "styled-components";
import DivContainer from "../../atoms/DivContainer";
import DivRow from "../../atoms/DivRow";
import DivColumn from "../../atoms/DivColumn";

const MainVerticalBorder = styled(DivContainer)`
    width: 20px;
    height: calc(100% - 40px);
    background: linear-gradient(to right, #ffffff 15%, #bdbdbd 25%, #bdbdbd 75%, #7b7b7b 85%);
`;

const CornerBorder = styled(DivContainer)`
    width: 20px;
    height: 20px;
    background: ${props => props.isRight 
        ? "linear-gradient(to right, #bdbdbd 75%, #7b7b7b 85%)"
        : "linear-gradient(to right, #ffffff 15%, #bdbdbd 25%)" 
    };
    border-radius-
`;

function VerticalBorder({ isRight }) {
    return (
        <DivColumn w="20px">
            <CornerBorder isRight={isRight} isTop={true} />
            <MainVerticalBorder />
            <CornerBorder isRight={isRight} isTop={false} />
        </DivColumn>
    );
}

export default VerticalBorder;
