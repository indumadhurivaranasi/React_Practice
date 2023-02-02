import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import ConditionalRendering from "./components/ConditionalRendering";
import List from "./components/List";
import HookCounter from "./components/HookCounter";
import HookStateObj from "./components/HookStateObj";
import UseEffectCounter from "./components/UseEffectCounter";
import UseEffectMouse from "./components/UseEffectMouse";

function App() {
  return (
    <div className="App">
      {/* <Greet name="Indu" />
      <Welcome company="Incture">
        <h1>Children props</h1>
      </Welcome>
      <Counter />
      <ConditionalRendering />
      <List></List>
      <HookCounter />
      <HookStateObj></HookStateObj>  */}
      <UseEffectCounter></UseEffectCounter>
      <UseEffectMouse></UseEffectMouse>
    </div>
  );
}

export default App;
