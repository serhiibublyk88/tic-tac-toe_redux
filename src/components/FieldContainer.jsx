import PropTypes from "prop-types";
import store from "../store";
import {
  setField,
  setCurrentPlayer,
  setGameEnded,
  setIsDraw,
} from "../actions/gameActions";
import styles from "../App.module.css"; 

const FieldContainer = ({ field }) => {
  const handleCellClick = (index) => {
    const state = store.getState();
    const { currentPlayer, isGameEnded } = state;

    if (!field[index] && !isGameEnded) {
      const nextPlayer = currentPlayer === "X" ? "O" : "X";
      const updatedField = [...field];
      updatedField[index] = currentPlayer;
      store.dispatch(setField(updatedField));
      store.dispatch(setCurrentPlayer(nextPlayer));
      checkGameStatus(updatedField, nextPlayer);
    }
  };

  const checkGameStatus = (field) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let line of lines) {
      const [a, b, c] = line;
      if (field[a] && field[a] === field[b] && field[a] === field[c]) {
        store.dispatch(setGameEnded(true));
        store.dispatch(setCurrentPlayer(field[a]));
        return;
      }
    }

    if (!field.includes("")) {
      store.dispatch(setGameEnded(true));
      store.dispatch(setIsDraw(true));
    }
  };

  return (
    <div className={styles.field}>
      {field.map((cell, index) => (
        <button
          key={index}
          className={styles.cell}
          onClick={() => handleCellClick(index)}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};

FieldContainer.propTypes = {
  field: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default FieldContainer;
