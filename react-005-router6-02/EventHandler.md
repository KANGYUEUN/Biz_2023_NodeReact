# React 의 eventHandler

- VanilaJs 에서 event 핸들러는 보통 다음과 같이 사용한다.

```js
const selector = document.quertSelector("button");
selector.addEventListner("click", handler);
```

- react 에서는 `addEventListener` 를 사용하지 않는다.
- 이유 : 이 함수는 한개의 Selector(tag)에 대하여 다수의 event 가 겹쳐져서 포함된다.
  즉, 한번클릭으로 여러번의 핸들러가 실행되는 현상을 만든다. react 는 개발자가 인식하지 못하는 상황에서
  화면이 랜더링 되는 경우가 많다.

- rendering 이 되는 과정에서 addEventListener 함수가 계속 실행되며 event가 계속 겹쳐 추가되는 현상이 발생한다.
- react, VanilaJs 에서는 사용을 권하지 않는 `inline-script`를 사용한다.

```jsx
<Botton onClick={onClickHandler}>

```

## event 핸들러를 부착하는 방법

- 1. 별도의 핸들러 함수를 생성한 후 컴포넌트(tag)에 부착하는 방법

```jsx
const btnOnClickHandler = (e) => {
    // btn이 클릭 되었을대 실행할 event 함수
}
    <Button onClick={btnOnClickHandler}>

```

- 2. 컴포넌트(tag)에 직접 CallBack 함수로 선언하는 방법

```jsx
<Button onClick={()=> {버튼이 클릭 되었을때 실행할 코드}}>
<Button onClick={(e)=>{console.("버튼이 클릭되엇을때 실행할 코드")}}>
```

- 3. CallBack 함수에서 다른함수 호출하는법(이 방법은 함수에 어떤 변수값을 전달하고자 할때 사용)
- 화면이 rendering될때 () => {} 함수가 실행되고 myFunc 함수 참조주소가 onClick 에 부착된다.
- Button click이 되면 비로소 myFunc함수를 호출하여 실행을 한다.

```jsx
<Button onClick={(e)=> {myFunc(e,value)}}>
```

- 위의 방법에서 절대 하지 말하야할 코드
- 아래의 코드는 화면이 랜더링 되는 순간 실행이 되기때문에 하면 안됨.
- 랜더링 될때마다 myFunc() 함수가 계속된다.

```jsx
<Button onClick={{myFunc(e,value)}}>

// 아래의 코드는state 값이 연속해서 반복 변경되는 현상이 발생하고
// 화면이 무한 rendering되는 현상이 발생한다.
<Button onClick={setState(state + 1)}>
```
