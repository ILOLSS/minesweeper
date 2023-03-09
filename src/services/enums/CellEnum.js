const Cell = {
    CLOSED: Symbol("CLOSED"),
    EMPTY: Symbol("EMPTY"),
    FLAG: Symbol("FLAG"),
    FLAG_PASSED: Symbol("FLAG_PASSED"),
    QUESTIONS: Symbol("QUESTIONS"),
    QUESTIONS_PASSED: Symbol("QUESTIONS_PASSED"),
    BOMB: Symbol("BOMB"),
    RED_BOMB: Symbol("RED_BOMB"),
    NOT_BOMB: Symbol("NOT_BOMB"),
    0: Symbol(0),
    1: Symbol(1),
    2: Symbol(2),
    3: Symbol(3),
    4: Symbol(4),
    5: Symbol(5),
    6: Symbol(6),
    7: Symbol(7),
    8: Symbol(8),
    9: Symbol(9)
};

Object.freeze(Cell);

export default Cell;