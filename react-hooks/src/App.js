import ClassCounter from "./components/ClassCounter";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";
import HookCounterThree from "./components/HookCounterThree";

function App() {
  return (
    <div className="App">
      <HookCounterThree />
      {/* <HookCounterTwo />
      <ClassCounter />
      <HookCounter /> */}
    </div>
  );
}

export default App;