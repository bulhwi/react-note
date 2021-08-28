# 컴포넌트 스타일링

### 일반 CSS
* [BEM Naming](http://getbem.com/naming/)
* CSS Selector - css 클래스가 특정 클래스 내부에 있는 경우에 스타일을 적용.

### Sass(Syntactically Awesome Style Sheets)
CSS 전처리기로 복잡한 작업을 쉽게 할 수 있도록 해주고, 스타일 코드의 재활용성을 높여 줄 뿐만 아니라 코드의 가독성을 높여서 유지보수를 쉽게 해준다.
node-sass 라이브러리가 필요하고 sass를 CSS로 변환해줌. 

### CSS Module
css를 불러와서 사용할때 클래스 이름을 고유한 값, 즉 **[파일이름]_[클래스 이름]_[해시값]** 형태로 자동으로 만들어서 컴포넌트 스타일 클래스 이름이 중첩되는 현상을 
방지하는 방법이다. 
create-react-app 구번전 에서는 CSS Module을 사용하기 위해 css-loader 설정을 따로 해야 했지만, 최신버전에서는 .module.css 확장자로 파일을 저장하면 css module이 적용된다.
* classnames 라이브러리
  * css 클래스를 조건부로 설정할때 매우 유용한 라이브러리
  * CSS Module을 사용할때 해당 라이브러리를 사용하면 여러 클래스를 적용할때 편리함
  ```javascript
  import classNames from 'classnames';
  classNames('one', 'two'); // 'one two'
  classNames('one', {two: true}) // 'one two' 
  classNames('one', {two: false}) // 'one'
  classNames('one', ['two', 'three']) // 'one two, three'
  
  const myClass = 'hello';
  classNames('one', myClass, {myCondition: true}); // one hello myCondition
  ```