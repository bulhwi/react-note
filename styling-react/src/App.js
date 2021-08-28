import React, {Component} from 'react';
import SassComponent from './SassComponent.js';
import CSSModule from './CSSModule';
import StyledComponent from './StyledComponent';
// import logo from './logo.svg';
// import './App.css';
//
// class App extends Component {
//
//   render() {
//     return (
//       <div className="App">
//         <header>
//           <img src={logo} alt='logo' className="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a href='https://reactjs.org' target="_blank" rel="noopener noreferrer">
//             Learn React
//           </a>
//         </header>
//       </div>
//     )
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <SassComponent />
        <CSSModule />
        <StyledComponent />
      </div>
    )
  }
}

export default App;
