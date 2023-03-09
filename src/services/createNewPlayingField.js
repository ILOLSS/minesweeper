import Cell from "../services/enums/CellEnum";
import randomInteger from "random-int";

function createNewPlayingField(index) {
    let newPlayingField = Array(256).fill().map(() => ({ type: Cell.CLOSED, isBomb: false, count: 0 }));
    let cnt = 40;
    while(cnt > 0) {
        const bomb_index = randomInteger(0, 255);
        if (bomb_index !== index) {
            cnt--;
            newPlayingField[bomb_index].isBomb = true;
        }
        // console.log(cnt);
    }
    // console.log(newPlayingField);
    // console.log(currentState.playingField);
    for(let i = 0; i < 16; i++) {
        for(let j = 0; j < 16; j++) {
            let cnt = 0;
            if (i - 1 >= 0 && j - 1 >= 0 && newPlayingField[16 * (i - 1) + (j - 1)].isBomb) {
                cnt++;
            }
            if (i - 1 >= 0 && newPlayingField[16 * (i - 1) + j].isBomb) {
                cnt++;
            }
            if (i - 1 >= 0 && j + 1 < 16 && newPlayingField[16 * (i - 1) + (j + 1)].isBomb) {
                cnt++;
            }
            if (j + 1 < 16 && newPlayingField[16 * i + (j + 1)].isBomb) {
                cnt++;
            }
            if (i + 1 < 16 && j + 1 < 16 && newPlayingField[16 * (i + 1) + (j + 1)].isBomb) {
                cnt++;
            }
            if (i + 1 < 16 && newPlayingField[16 * (i + 1) + j].isBomb) {
                cnt++;
            }
            if (i + 1 < 16 && j - 1 >= 0 && newPlayingField[16 * (i + 1) + (j - 1)].isBomb) {
                cnt++;
            }
            if (j - 1 >= 0 && newPlayingField[16 * i + (j - 1)].isBomb) {
                cnt++;
            }
            newPlayingField[16 * i + j].count = cnt;
        }
    }
    console.log(newPlayingField);
    return newPlayingField;
}

export default createNewPlayingField;
