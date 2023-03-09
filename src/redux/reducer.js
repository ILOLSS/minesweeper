import createNewPlayingField from "../services/createNewPlayingField";
import Cell from "../services/enums/CellEnum";
import randomInteger from "random-int";

const OPEN_CELL = "OPEN_CELL";
const SET_FLAG = "SET_FLAG";
const DELETE_FLAG = "DELETE_FLAG";
const SET_QUESTION = "SET_QUESTION";
const DELETE_QUESTION = "DELETE_QUESTION";

export function openCell(i, j) {
    return (dispatch, getState) => {
        const currentState = getState();
        const index = 16 * i + j;
        let PlayingField = currentState.playingField;
        if (currentState.moveCount === 0) {
            PlayingField = createNewPlayingField(index);
        }
        if (PlayingField[index].isBomb) {
            dispatch({
                type: OPEN_CELL,
                payload: {
                    ...currentState,

                }
            });
        }
    }
}

export function setFlag() {

}

export function deleteFlag() {

}

export function setQuestion() {

}

export function deleteQuestion() {

}

const initialState = {
    playingField: [],
    isEnd: false,
    isWin: false,
    moveCount: 0,
    flagCount: 0,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case OPEN_CELL: 
            return 
        case SET_FLAG:
            return
        case DELETE_FLAG:
            return
        case SET_QUESTION:
            return
        case DELETE_QUESTION:
            return
        default:
            return state;
    }
}