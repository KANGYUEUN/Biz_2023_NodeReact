# props Drilling

- react 는 컴포넌트 간의 state 를 서로 공유 할 수 없다.
- react 는 부모 컴포넌트 에서 state를 만들고 자손 컴포넌트에게 전달하는데
  자손 컴포넌트는 이를 props 를 통하여 전달 받는다.
- state 생성(useState)한 컴포넌트 에서는 setState()함수를 통하여 state를 변경 할 수 있다.
- state 를 props 로 전달받은 자손 컴포넌트 에서는 값을 변경 할 수 없다.

- state를 props로 전달받은 자손 컴포넌트 에서 값을 변경 하고자 하면 ,
  부모 컴포넌트가 state를 변경 할 수 있도록 함수를 전달해 주어야 한다.
- 자손은 전달 받은 함수를 통하여 부모 컴포넌트 에게 state를 변경 해 달라고 요청한다.
- 만약 부모 자손의 자손 컴포넌트 에게 state를 전달 한다면 자손 컴포넌트에게 먼저 전달하고,
  자손이 그 자손에게 또 다시 전달하는 체인이 만들어 져야 한다.

- 이러한 연속적인 state props 전달 체인을 `props Drilling` 이라 한다.
- 초기 리엑트 에서는 이러한 구조가 프로젝트를 매우 어려운 모양으로 만드는 원인이 되었다.
- 중간에 이러한 드릴링을 해결 하기 위하여 `redux`, `reducer` 와 같은 3rd party LIB 를 사용하여 해결했다.

- `redux` 는 이러한 문제를 대부분 해결 하였으나, 중소 규모 플젝에서는 너무 큰규모의 LIB 이였다.
  또한, 학습 곡선이 매우 높다.
- 최근 react 에서는 `ContextProvder`를 도입하여 중소규모프로젝트에서 state를 효율적으로 관리 할수 있도록 하였다.

## ContextProvider, state Store

- state 의 드릴링 현상은 각 컴포넌트 간에 state 를 공유 할수없는 문제 때문에 발생한다.
- react 에서는 Store 라는 개념을 도입하여 `state 와 setState()` 컴포넌트를 감싸는(Bound) Store를 하나 만들어 보관한다.
- 부모, 자손 or 그 자손 중에서 State 가 필요하면 Store 로 부터 State 를 전달 받아 사용한다.
