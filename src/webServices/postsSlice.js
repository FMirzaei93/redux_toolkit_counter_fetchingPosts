import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./services";
export const initialState = {
  posts: [],
  loading: false,
  error: null,
};

export const postSlice = createSlice({
  name: "posts",
  // It's a name that generated action type constants will use this as a prefix(under the hood).

  initialState: initialState,
  extraReducers: {
    //under the hood, the type of getPosts action is post/getPosts/[fulfilled or rejected or pending](look at services.js)
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false;
      state.posts = action.payload.results;
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false;
      state.posts = [];
      console.log("rejected!");
    },
    [getPosts.pending]: (state, action) => {
      state.loading = true;
      console.log("pending...");
    },
    //    [CreatePost.fulfilled]: (state, action) => {
    //    state.posts.unshift(action.payload.data);
    //    },
  },
});
export default postSlice.reducer;

// Notice that inside extraReducers, you can handle both resolved (fulfilled) and rejected (rejected) states.
