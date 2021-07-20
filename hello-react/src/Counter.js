import React, {Component} from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // 초기값 설정.
      number: 0,
      fixedNumber: 100
    };
  }

  /*
  // 생성자 호출없이 state를 사용.
  state = {
    // 초기값 설정.
    number: 0,
    fixedNumber: 100
  }
  */

  render() {
    const {number, fixedNumber} = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({number: number + 1}, () => {console.log("setState 호출")});
          }}
        >
          +1
        </button>
      </div>
    )
  }
}

export default Counter;