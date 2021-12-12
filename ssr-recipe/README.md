### 서버사이드 렌더링

```bash
 $ npm create react-app ssr-recipe
 $ cd ssr-recipe
 $ npm install react-router-dom@5 # 책에서는 5버전대를 사용함.
 $ npm run start
```

### 서버사이드 렌더링과 코드 스플리팅 충돌
서버사이드 렌더링과 코드 스플리팅을 함께 적용하면 작업이 어려움.
별도의 호환작없없이 두 기술을 함께 적용하면, 페이지 깜빡임이 발생한다.
1. 서버사이드 렌더링된 결과물이 브라우저에 나타남
2. 자바스크립트 파일 로딩 시작
3. 자바스크립트가 실행되면서 아직 불러오지 않은 컴포넌트를 null로 렌더링함
4. 페이지에서 코드 스플리팅된 컴포넌트들이 사라짐
5. 코드 스플리팅된 컴포넌트들이 로딩된 이후에 제대로 노출됨.

P540          
책에서는 **Loadable Components** 라이브러리를 사용해서 서버 사이드 렌더링 후 필요한 파일의 경로를 추출하여 렌더링 결과에 스크립트/스타일 태그를 삽입하는 방식으로 
문제를 해결함.

[Loadble Components](https://loadable-components.com/docs/getting-started/)


### 서버사이드렌더링 구현하기

```bash
$ npm run eject
```
서버사이드 렌더링 구현을 하기 위해서는 CRA로 구성된 프로젝트 내부에 숨겨져있는 웹팩설정을 커스터마이징 해줘야하기 때문에,  
**npm run eject** 명령어로 밖으로 꺼내온다.
