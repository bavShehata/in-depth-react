// import ClassCounter from "./components/ClassCounter";
// import HookCounter from "./components/HookCounter";
// import HookCounterTwo from "./components/HookCounterTwo";
// import HookCounterThree from "./components/HookCounterThree";
// import HookCounterFour from "./components/HookCounterFour";
// import HookCounterOne from "./components/HookCounterOne";
// import HookMouse from "./components/HookMouse";
// import MouseContainer from "./components/MouseContainer";
// import IntervalHookCounter from "./components/IntervalHookCounter";
// import DataFetching from "./components/DataFetching";
// import ComponentC from "./components/ComponentC";
// import CounterOne from "./components/CounterOne";
// import CounterTwo from "./components/CounterTwo";
// import CounterThree from "./components/CounterThree";
// import ComponentA from "./components/ComponentA";
// import ComponentB from "./components/ComponentB";
// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();
// export const CounterContext = React.createContext();
// const initialState = 0;
// const reducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;
//     case "decrement":
//       return state - 1;
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };
import "./App.css";
import React, { useReducer } from "react";
import UseStateDataFetching from "./components/UseStateDataFetching";
import UseReducerDataFetching from "./components/UseReducerDataFetching";
import ParentComponent from "./components/ParentComponent";
import Counter from "./components/Counter";
import FocusInput from "./components/FocusInput";
import ClassTimer from "./components/ClassTimer";
import HookTimer from "./components/HookTimer";

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <HookTimer />
      {/* <ClassTimer /> */}
      {/* <FocusInput /> */}
      {/* <Counter /> */}
      {/* <ParentComponent /> */}
      {/* <UseReducerDataFetching /> */}
      {/* <UseStateDataFetching /> */}
      {/* <p>{count}</p>
      <CounterContext.Provider value={{ count, dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CounterContext.Provider> */}
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
