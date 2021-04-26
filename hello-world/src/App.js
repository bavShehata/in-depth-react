import logo from "./logo.svg";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Greet name="Bavly">
        <p>I am a child</p>
      </Greet>
      <Welcome name="Jim" />
      <Hello />
    </div>
  );
}

export default App;
