import { useSelector, useDispatch } from "react-redux";
import { hasStarted, changePause, increment } from "./general";

function App() {
  const { isActive, isPaused, count } = useSelector((state) => state.general);
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <h1>Count: {count}</h1>
      <h1>isActive: {isActive + ""}</h1>
      <h1>isPaused: {isPaused + ""}</h1>
      <button onClick={() => dispatch(hasStarted())}>
        change hasStarted state
      </button>
      <button onClick={() => dispatch(changePause())}>
        change isPause state
      </button>
      <button onClick={() => dispatch(increment({ number: 5 }))}>+</button>
    </div>
  );
}

export default App;
