React 정리(ing)
===========
react + js + ...
-----------

*********
7/12R

#엘리먼트

##ReactDOM.render()
react 엘리먼트를 루트 DOM 노드에 렌더링하려면 둘 다 
ReactDOM.render()로 전달

```
const element = <h1>Hello, world</h1>;
ReactDOM.render(element, document.getElementById('root'));
```

    => Hello, world


##렌더링 된 엘리먼트 업데이트 
React 엘리먼트 = 불변객체

엘리먼트를 생성한 이후에는 해당 엘리먼트의 자식이나 속성을 변경 불가 
엘리먼트는 영화에서 하나의 프레임과 같이 특정 시점의 UI를 보여줍니다.

```
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
```
***
#Component

##컴포넌트 작성
컴포넌트를 정의하는 가장 간단한 방법은 JavaScript 함수를 작성하는 것

함수 컴포넌트 or 클래스 컴포넌트
function / class



##컴포넌트 렌더링 

React 엘리먼트는 사용자 정의 컴포넌트로도 가능
React가 사용자 정의 컴포넌트로 작성한 엘리먼트를 발견하면 JSX 어트리뷰트와 자식을 해당 컴포넌트에 단일 객체로 전달합니다. 이 객체를 “props”

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const element = <Welcome name="Sara" />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
```

주의 : 컴포넌트 이름은 항상 대문자로 시작
소문자 시작 컴포넌트 -> DOM 태그로 처리
    ex)
    <div />
    <Welcome />

##컴포넌트 합성
컴포넌트 자신의 출력에 다른 컴포넌트 참조 가능

##컴포넌트 추출
하나의 컴포넌트를 여러 개의 작은 컴포넌트로 조각내기

***

#Props  (props는 속성을 나타내는 데이터)

##Props는 읽기 전용
함수 컴포넌트나 클래스 컴포넌트 모두 컴포넌트의 자체 props를 수정 X

    모든 React 컴포넌트는 
    자신의 props를 다룰 때 
    반드시 
    순수 함수처럼 동작해야 한다.

변경은 state 

***
***

#State and Lifecycle

State는 props와 유사하지만, 비공개이며 컴포넌트에 의해 완전히 제어됩니다.

##함수에서 클래스로 변환
1. 클래스로 변경
```
class Clock extends React.Component {
    render() {
        <!-- props -> this.props로 변경 -->
    }
}
```
2. State 추가
1) props에서 state로 이동
    props -> state로 변경

2) 초기 this.state를 지정하는 class constructor를 추가
클래스 컴포넌트는 항상 props로 기본 constructor를 호출해야 함.

3) <Clock /> 요소에서 date prop을 삭제

```
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
```

***

##class - 생명주기 메소드

componentDidMount() 메서드 
-> 컴포넌트 출력물이 DOM에 렌더링 된 후에 실행됩니다. 
ex) 이 장소가 타이머를 설정하기에 좋은 장소입니다.

componentWillUnmount() 
-> 제거 
ex) 생명주기 메서드 안에 있는 타이머를 분해


컴포넌트 로컬 state를 업데이트하기 위해 this.setState()를 사용

##setState( state 수정) 
this.state를 지정할 수 있는 유일한 공간은 바로 constructor

#직접 State 수정 x

#State 업데이트는 비동기적일 수도 있다. 
- React는 성능을 위해 여러 setState() 호출을 단일 업데이트로 한꺼번에 처리 가능
- 함수(일반이나 화살표 함수 이용해서 하나로 묶음)

```
this.setState(function(state, props) {
  return {
    counter: state.counter + props.increment
  };
});
```

#State 업데이트는 병합됨.
setState()를 호출할 때 React는 제공한 객체를 현재 state로 병합

***






