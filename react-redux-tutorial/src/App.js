import React from "react";
import Todos from "./components/Todos.js";
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr/>
      <Todos />
    </div>
  );
}

export default App;
