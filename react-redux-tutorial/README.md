리엑트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 **`프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것이다.`**
리액를 사용하는데 필수 사항은 아니지만 해당 패턴을 사용하면 코드의 재사용성도 높아지고 관심사의 분리가 이루어져 UI를 작성할때
좀 더 집중할 수 있다. **기술적인 부분에 의해서 나눈 것이 아니라, 목적성에 의해서 만들어진 패턴이다.**

* **프레젠테이셔널 컴포넌트**   
  주로 상태관리가 이루어 지지않고, 그저 props를 통해 데이터를 받아와서 화면에 UI를 보여주기만 하는 컴포넌트.
* **컨테이너 컴포넌트**  
  리덕스와 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.


### [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko&)
* [Redux DevTools github](https://github.com/zalmoxisus/redux-devtools-extension#usage)
* module install
```gitbash
// npm
npm install redux-devtools-extension

// yarn
yarn add redux-devtools-extension
```

* src/index.js
```javascript
...
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools());
...
```


[immer](https://github.com/immerjs/immer#readme)   
리듀서에서 상태를 업데이트할 때는 불변성을 지켜야 하기 때문에 spread 연산자(...)와 배열의 내장함수들(map, concat, filter 등등)을 사용하게 되는데,
모듈의 상태가 복잡해질수록 불변성을 지키기가 까다로워진다.
객체의 깊이가 깊지 않을수록 불변성을 지켜가면서 값을 업데이트하기가 수월하다.
객체의 구조가 복잡해지거나, 객체로 이루어진 배열을 다룰경우 'immer'를 사용하면 편리하게 상태관리가 가능해진다.
