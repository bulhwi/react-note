## [Context API](https://ko.reactjs.org/docs/context.html)
react 컴포넌트간에 전역적으로 데이터의 상태관리/공유를 하기위한 방법 
컴포넌트 트리간에 props로 일일이 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다.

### [Context API - Consumer](https://ko.reactjs.org/docs/context.html#contextconsumer)  
```javascript
<MyContext.Consumer>
  {value => // context 값을 이용한 렌더링.}
<MyContext.Consumer> 
```

### [Context API - Provider](https://ko.reactjs.org/docs/context.html#contextprovider)  