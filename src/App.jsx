import { useState, useEffect } from "react";
import store from "./store";
import { resetGame } from "./actions/gameActions";
import FieldContainer from "./components/FieldContainer";
import InformationContainer from "./components/InformationContainer";
import styles from "./App.module.css";
const App = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    return () => unsubscribe();
  }, []);

  const handleReset = () => {
    store.dispatch(resetGame());
  };

  return (
    <div className={styles.game}>
      <InformationContainer />
      <FieldContainer field={state.field} />
      <button className={styles.resetButton} onClick={handleReset}>
        Restart
      </button>
    </div>
  );
};

export default App;
