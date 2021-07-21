import React from "react";
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from "./Say"
import EventPractice from "./EventPractice"
import EventPracticeFunctionType from "./EventPractice_function_type";

function App() {
  return (
    <>
      <MyComponent name={"React"} favoriteNumber={3}>children</MyComponent>
      <hr/>
      <Counter />
      <hr/>
      <Say />
      <hr/>
      <EventPractice />
      <hr/>
      <EventPracticeFunctionType />
    </>
  )
}

export default App;
