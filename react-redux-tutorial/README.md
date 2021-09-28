리엑트 프로젝트에서 리덕스를 사용할 때 가장 많이 사용하는 패턴은 **`프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리하는 것이다.`** 
리액를 사용하는데 필수 사항은 아니지만 해당 패턴을 사용하면 코드의 재사용성도 높아지고 관심사의 분리가 이루어져 UI를 작성할때
좀 더 집중할 수 있다. **기술적인 부분에 의해서 나눈 것이 아니라, 목적성에 의해서 만들어진 패턴이다.**

* **프레젠테이셔널 컴포넌트**   
  주로 상태관리가 이루어 지지않고, 그저 props를 통해 데이터를 받아와서 화면에 UI를 보여주기만 하는 컴포넌트.  
* **컨테이너 컴포넌트**  
  리덕스롸 연동되어 있는 컴포넌트로, 리덕스로부터 상태를 받아오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.


### [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=ko&)
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