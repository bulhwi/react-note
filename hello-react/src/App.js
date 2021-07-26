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
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';

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


// class App extends Component {
//   render() {
//     return (
//       <>
//         <ScrollBox ref={(ref) => this.scrollBox = ref} />
//         <button onClick={() => {
//           this.scrollBox.scrollToBottom();
//         }}>맨 밑으로
//         </button>
//         <hr/>
//         <IterationSample />
//       </>
//     );
//   }
// }

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}> 랜덤색상 </button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoundary>
      </div>
    )
  }
}



export default App;
