import {
  SET_CURRENT_PLAYER,
  SET_GAME_ENDED,
  SET_IS_DRAW,
  SET_FIELD,
  RESET_GAME,
} from "../actions/gameActions";


const initialState = {
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
  field: ["", "", "", "", "", "", "", "", ""],
};


const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PLAYER:
      return { ...state, currentPlayer: action.payload };
    case SET_GAME_ENDED:
      return { ...state, isGameEnded: action.payload };
    case SET_IS_DRAW:
      return { ...state, isDraw: action.payload };
    case SET_FIELD:
      return { ...state, field: action.payload };
    case RESET_GAME:
      return initialState;
    default:
      return state;
  }
};

export default gameReducer;
