import "./App.css";
import "./appStyles.css";
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
import NameList from "./components/NameList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import { PureComp } from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import Input from "./components/Input";
import FocusInput from "./components/FocusInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import ComponentC from "./components/ComponentC";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Bavly">
        <ComponentC />
      </UserProvider>

      {/* <Counter
        render={(count, incCount) => (
          <>
            <HoverCounterTwo count={count} incCount={incCount} />
          </>
        )}
      />
      <Counter
        render={(count, incCount) => (
          <>
            <ClickCounterTwo count={count} incCount={incCount} />
          </>
        )}
      /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User name={(name) => name} /> */}
      {/* <HoverCounter />
      <ClickCounter /> */}
      {/* <ErrorBoundary>
        <Hero heroName="batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="joker" />
      </ErrorBoundary> */}

      {/* <PortalDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
      {/* <Table /> */}
      {/* <LifeCycleA /> */}
      {/* <Form /> */}
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
      {/* <UserGreeting /> */}
      {/* <NameList /> */}
      {/* <Stylesheet primary={true} />
      <Inline />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
    </div>
  );
}

export default App;
