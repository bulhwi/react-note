import React, {Component} from 'react';
// import Say from "./Say";
// import Counter from "./Counter";
// import MyComponent from "./MyComponent";
// import EventPractice from "./EventPractice";
// import FunctionalEventPractice from "./FunctionalEventPractice";
import ValidationSample from './ValidationSample'
import ScrollBox from './ScrollBox'

// const App = () => {
//   // return <EventPractice />
//   return <ValidationSample />
// };

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => {this.scrollBox=ref}}/>
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    )
  }
}

export default App;
