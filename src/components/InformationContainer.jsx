import { useState, useEffect } from "react";
import store from "../store";
import styles from "../App.module.css"; 

const InformationContainer = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => unsubscribe();
  }, []);

  const { currentPlayer, isGameEnded, isDraw } = state;

  return (
    <div className={styles.information}>
      {isDraw && <div className={styles.result}>Draw</div>}
      {!isDraw && isGameEnded && (
        <div className={styles.result}>
          Winner: {currentPlayer === "X" ? "X" : "O"}
        </div>
      )}
      {!isGameEnded && (
        <div className={styles.turn}>
          Turn:{" "}
          <span
            className={
              currentPlayer === "X" ? styles.currentPlayer : styles.player
            }
          >
            {currentPlayer}
          </span>
        </div>
      )}
    </div>
  );
};

export default InformationContainer;
