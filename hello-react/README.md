# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

---------------------------------------------------------------------         

### 함수형 컴포넌트
```javascript
import React from "react";
import './App.css';

function App() {
  const name = 'Name';
  return <div className='react'>{name}</div>;
}

export default App;
```
장점)    
* 선언하기 편리함.
* 클래스형보다 메모리 자원을 덜 사용함.
* 빌드 이후의 결과물 파일의 크기도 더 작다.    

단점)   
* state, 라이프사이클 API의 사용이 불가능하다. >>> **리액트 16.8 업데이트 이후 Hooks로 해결 가능.**

### Class형 컴포넌트
```javascript
import React, {Component} from 'react';
class App extends Component {
  render() {
    const name = "react";
    return <div className='react'>{name}</div>;
  }
}
export default App;
```
* state, 라이프사이클 API 사용이 가능
* 임의 메서드를 정의할 수 있다.

**함수형과 클래스형의 성능과 파일크기 면에서 사실상 크게 차이가 없어서 중요하게 생각안해도 됨.**
**리액트 공식 문서에서는 새로운 컴포넌트를 작성할 때 함수형 컴포넌트와 Hooks를 사용하도록 권창을 하고 있다.**

### PropTypes 종류
* array : 배열
* arrayOf(type) : 특정 타입으로 이루어진 배열. ex) arrayOf(PropTypes.number) -> 숫자로 이루어진 배열
* bool: boolean
* func: 함수
* number: 숫자
* object: 객체
* string: 문자열
* symbol: ES6의 Symbol
* node: 렌더링할 수 있는 모든 것.(숫자, 문자열, 혹은 JSX코드, children도 node PropType.)
* instanceOf(클래스): 특정 클래스의 인스턴스
* oneOf(['dog', 'cat]): 주어진 배열 요소 중 값 하나
* oneOfType([React.PropType.string, PropTypes.number]): 주어진 배열 안의 종류중 하나
* objectOf([React.PropTypes.number]): 객체의 모든 키 값이 인자로 주언진 PropType인 객체
* shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체.
* any: 아무 종류

### setState()
* setState에 함수 전달
```javascript
/**
 * prevState : 기존 상태
 * props : 현재 지니고 있는 props 상태
 */
this.setState((prevState, props) => {
  return {
    // 업데이트하고 싶은 내용
  }
})
```

* setState가 끝난 후 특정 작업 실행
```javascript
this.setState({number: number + 1}, () => {
  console.log("callback :: setState가 호출 되었습니다.");
})
```

* [리액트 이벤트 메뉴얼](https://reactjs.org/docs/events.html)

### map(callback, [thisArg])      

* callback: 새로운 배열의 요소를 생성하는 함수로 파라미터는 다음 세가지   
  - currentValue: 현재 처리하고 있는 원본 배열
  - index: 현재 처리하고 있는 요소의 index 값
  - array: 현재 처리하고 있는 원본 배열
* thisArg(선택 항목): callback 함수 내부에서 사용할 this 레퍼런스   
```javascript
const number = [1,2,3,4,5];
const processed = numbers.map((num) => num * num);
console.log(processed); // [1, 4, 9, 16, 25]
```

### 라이프 사이클
* 마운트   
 DOM이 생성되고 웹 브라우저상에 나타나는 것을 마운트라고 한다.
 * 호출되는 메서드     
   - constructor : 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드.
   - getDerivedStateFromProps : props에 있는 값을 state에 넣을 때 사용하는 메서드.
   - render : 우리가 준비한 UI를 렌더링하는 메서드.   
  
* 업데이트
  컴포넌트가 업데이트 되는 경우.  
  * props가 바뀔때.
  * state가 바뀔때.
  * 부모 컴포넌트가 리렌더링될 때   
  * this.forceUpdate로 강제로 렌더링을 트리거 할때
  - 업데이트시 호출되는 메서드.  
    - getDerivedStateFromProps
    - shouldComponentUpdate
    - render (shouldComponentUpdate에서 true 반환시.)
    - getSnapshotBeforeUpdate
    - componentDidUpdate   
  
* 언마운트
  컴포넌트를 DOM에서 제거하는 것을 언마운트라고 함.
  * componentWillUnmount : 컴포넌트가 웹브라우저에서 사라지기 전에 호출하는 메서드.
