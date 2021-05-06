import React, { useReducer, useEffect } from "react";
import axios from "axios";
const initialState = {
  loading: true,
  error: "",
  post: {},
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };
    case "FETCH_FAILURE":
      return {
        loading: false,
        post: {},
        error: "Error occured",
      };
    default:
      return state;
  }
};

const UseReducerDataFetching = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(async () => {
    try {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
      const data = res.data;
      dispatch({ type: "FETCH_SUCCESS", payload: data });
      console.log(data);
    } catch (e) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  }, []);
  return (
    <div>
      {state.loading && "Loading..."}
      {state.post && (
        <ul>
          <li key={state.post.id}>{state.post.title}</li>
        </ul>
      )}
      {state.error && state.error}
    </div>
  );
};
export default UseReducerDataFetching;
