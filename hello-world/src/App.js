import logo from "./logo.svg";
import Greet from "./components/Greet.js";
import Welcome from "./components/Welcome.js";
import Hello from "./components/Hello.js";
import Message from "./components/Message.js";
import Counter from "./components/Counter.js";
import FunctionClick from "./components/FunctionClick.js";
import ClassClick from "./components/ClassClick.js";
import EventBind from "./components/EventBind.js";
import ParentComponent from "./components/ParentComponent.js";
import UserGreeting from "./components/UserGreeting.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Bavly">
        <p>I am a child</p>
      </Greet> */}
      {/* <Welcome name="Jim" /> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <Counter /> */}
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <EventBind /> */}
      {/* <ParentComponent /> */}
      <UserGreeting />
    </div>
  );
}

export default App;
