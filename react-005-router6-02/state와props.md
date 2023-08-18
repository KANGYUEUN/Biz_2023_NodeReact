# React 에서 State 와 Props

- JS 기반의 React 에서는 모든 변수에는 값, 함수, 객체, 배열 들을 저장 할 수 있다.
- 변수에 저장된 모든 것들은 다른 함수에 매개변수로 전달 할 수 있다.

```js
const myFunc = () => console.log("Hello Korea"); //함수
const myVal = "대한민국"; // 문자열 값
const friend = { 이름: "홍길동", 주소: "서울특별시" }; // JSON객체
const arr = [1, 2, 3, 4, 5, 6, 6, 7, 8]; // 배열

// 선언된 변수들을 hello()함수의 매개변수로 전달한다.
hello(myFunc, myVal, friend, arr);
```

- react 에서는 변수의 특별한 개념으로 `state` 와 `props` 가 있다.
- `state`는 `useState()` hooks 함수를 통하여 생성된 `상태변수` 이다.

- `state` 는 화면 rendering 과 매우 밀접한 관계가 있고, state의 값의 변화가 발생하면 화면이 다시 그려진다.
- state는 일반 변수처럼 직접 값을 변화시켜서는 안되며 직접 변화 시킬 수도 없다.
  반드시, `setState()`함수를 통해 값을 바꿔야 한다.
- state는 state는 생성한 컴포넌트 에서만 값을 변경 할 수 있다.
  다른 컴포넌트에서 값을 변경하려면 반드시 `setState()`를 보내주고 그 함수를 통해서만 변경가능하다.

- state를 자식 컴포넌트에게 전달하기 위해서는
  `<Comp 변수={state}/> `와 같은 코드를 사용하여 전달 해야 한다.
- `state`를 전달받은 자식 컴포넌트에서는 `state`가 순간 `props`로 변환된다.
- 받는 방법

```jsx
const Child = (props) => {
  return <></>;
};
```

- state가 props로 변환되는 순간 이 변수는 모두 `read only`가 된다.
  결코 자식 컴포넌트에서는 `props`로 전달된 어떤 변수의 값도 변경 할 수 없다.
- props 로 전달받은 변수의 값을 변경하려면, 부모 컴포넌트로 부터 변수의 값을 변경 할 수있는 `함수`도 함께 전달 받아야 한다.
- 부모로 부터 전달받은 함수를 실행하여 변수의 값을 변경 해야 한다.
- props 로 전달 받은 요소중 `함수`는 자식 컴포넌트에서 자유롭게 호출, 실행, 할 수 있다.

```jsx

const BBsInput = ({ bbsDto, setBbsDto }) => {
  const inputOnChange = (e) => {
    const { name, value } = e.target;

    setBbsDto({ ...bbsDto, [name]: value });
  };
```

## 자식 컴포넌트에서 부모가 전달한 props 를 받는 방법

```jsx
// 모든 변수가 담긴 props를 한꺼번에 받고
// 사용하는 곳에서 각 요소의 데이터를 참조하는 방법
const Child = (props) => {
  return <>{props.name}</>;
};

// 전달받은 props 를 한번 구조분해 하여
// 각각 개별 변수로 생성 한후 사용하는 방법
const Child = (props) => {
  const { name, address, age } = props;
  return (
    <>
      {name}
      {address}
      {age}
    </>
  );
};

// 매개변수 수준에서 직접 구조 분해하여
// 개별변수로 생성하고 사용하는 방법.
const Child = ({ name, address, age }) => {
  return (
    <>
      {name}
      {address}
      {age}
    </>
  );
};
```
