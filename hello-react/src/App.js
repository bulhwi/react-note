import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';
import Say from './Say';
import EventPractice from './EventPractice';
import EventPracticeFunctionType from './EventPractice_function_type';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './IterationSample';

// function App() {
//   return (
//     <>
//       <MyComponent name={'React'} favoriteNumber={3}>children</MyComponent>
//       <hr />
//       <Counter />
//       <hr />
//       <Say />
//       <hr />
//       <EventPractice />
//       <hr />
//       <EventPracticeFunctionType />
//       <hr />
//       <ValidationSample />
//       <hr />
//     </>
//   );
// }

class App extends Component {
  render() {
    return (
      <>
        <ScrollBox ref={(ref) => this.scrollBox = ref} />
        <button onClick={() => {
          this.scrollBox.scrollToBottom();
        }}>맨 밑으로
        </button>
        <hr/>
        <IterationSample />
      </>
    );
  }
}


export default App;
