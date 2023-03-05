import styled from 'styled-components';
import DivContainer from './DivContainer';

const DivColumn = styled(DivContainer)`
    flex-direction: column;
    justify-content: start;
    align-items: center;
    height: 100%;
    width: ${props => props.w ?? "100%"};
    background-color: red;
`;

export default DivColumn;
