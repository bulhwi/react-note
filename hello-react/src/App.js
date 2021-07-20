import React from "react";
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';


function App() {
  return (
    <>
      <MyComponent name={"React"} favoriteNumber={3}>children</MyComponent>
      <Counter />
    </>
  )
}

export default App;
