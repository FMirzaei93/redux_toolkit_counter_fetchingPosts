import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
const BASE_URL = "https://opentdb.com/api.php?amount=5";

//getPosts is an action that needs to be dispatched in App.js.
//getPosts itself has 3 other actions: fullfiled, rejected, pending, that depening on the result, it'll dispatch one of these 3 actions.
//createAsyncThunk(actionName([slice name]/[action name]), async action performer function)
export const getPosts = createAsyncThunk(
  "posts/getPosts",
  // It's a name that generated action type constants will use this as a prefix(under the hood).
  // Everytime that this action is dispatched(from App.js), depending on the result of the async function(fullfilled, rejected, pending),
  //this action will dispatch another action, so the action type will be : name/[fulfilled or rejected or pending]
  //which here is : posts/getPosts/fulfilled (look at the generated tyoes on Redux google extension)
  //now the reducer in postSlice decides what to do with the state based on the generated action type here.

  async () => {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  }
);

//
// export const CreatePost = createAsyncThunk(
//   "post/createPost",
//   async (post) => await axios.post(`${BASE_URL}/post`, post)
// );

// Explanations:
// To handle async actions Redux toolkit provides a special API method called createAsyncThunk
// which accepts a string identifier and a payload creator callback that performs the actual async logic
// and returns a promise that will handle the dispatching of the relevant actions based on the promise you return,
// and action types that you can handle in your reducers.
//Unlike traditional data flows, actions handled by createAsyncThunk will be handled by the section extraReducers inside a slice.

//The first parameter to createAsyncThunk is the name of the action, the standard convention for Redux action names is '[slice name]/[action name]' e.g. ('users/getAll').
//The second parameter is the async function that performs the action and returns the result when it's finished.

//For each async action created with createAsyncThunk(), three Redux actions are automatically generated by the Redux Toolkit,
//one for each stage of the async action: pending, fulfilled, rejected.
