import ClassCounter from "./components/ClassCounter";
import "./App.css";
import HookCounter from "./components/HookCounter";
import HookCounterTwo from "./components/HookCounterTwo";

function App() {
  return (
    <div className="App">
      <HookCounterTwo />
      <ClassCounter />
      <HookCounter />
    </div>
  );
}

export default App;
