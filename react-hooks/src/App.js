import ClassCounter from "./components/ClassCounter";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";
import HookCounterFour from "./components/HookCounterFour";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import MouseContainer from "./components/MouseContainer";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";
import React, { useReducer } from "react";
import CounterOne from "./components/CounterOne";
import CounterTwo from "./components/CounterTwo";
import CounterThree from "./components/CounterThree";
import ComponentA from "./components/ComponentA";
import ComponentB from "./components/ComponentB";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
export const CounterContext = React.createContext();
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};
function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <p>{count}</p>
      <CounterContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider>
      {/* <CounterThree /> */}
      {/* <CounterTwo /> */}
      {/* <CounterOne /> */}
      {/* <UserContext.Provider value="Bavly">
        <ChannelContext.Provider value="bavlify">
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      {/* <DataFetching /> */}
      {/* <IntervalHookCounter /> */}
      {/* <MouseContainer /> */}
      {/* <HookMouse /> */}
      {/* <HookCounterOne /> */}
      {/* <HookCounterFour /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterTwo />
      <ClassCounter />
      <HookCounter /> */}
    </div>
  );
}

export default App;
