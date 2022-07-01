import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";

// Actions:
import { hasStarted, changePause, increment } from "./slices/general";
import { getPosts } from "./webServices/services";

// Components:
import Post from "./components/Post";

function App() {
  //These come from the store
  const { isActive, isPaused, count } = useSelector((state) => state.general);
  const { posts, loading, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getPosts());
  }, []);

  console.log(posts);
  const postsList =
    posts &&
    posts.map((post) => {
      return <Post key={nanoid()} post={post} />;
    });

  return (
    <div className='App'>
      {postsList}
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
