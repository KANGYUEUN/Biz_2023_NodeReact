import { useState } from "react";

// 여기는 Todo Content 를 입력하고 추가를 실행하는 Component
/**
 *
 * @param {*} props
 * 부모 Comps 로 부터 전달받은 모든 것을 담아오는 바구니,
 * 1. props 를 통하여 전달받은 모든것은 ' READ ONLY ' 이다
 * 2. props 를 통하여 전달받은 state 도 여기서 절대 변경 할 수 없다
 * 3. props 를 통해 전달받은 state를 변경 하려면 변경할 함수도 같이 전달 받아야 한다
 * @returns
 */
const TodoInput = (props) => {
  // 화면에 데이터를 렌더링할때 사용할 변수인 State 선언.
  // const [content, setContent] = useState("");

  // const [n1,n2]=["대한민국","우리나라"]
  // n1,n2 라는 변수를 만들고 첫번째 요소와 두번째요소를 각각 저장해 달라
  // 근데 JS 에서 하단의 코드 {} 는 객체를 나타낸다
  // props = 분해함 main에서 받음
  const { content, setContent, todoListAdd } = props;
  // const content1 = props.content;
  // const setContent1 = props.setContent;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const btnClickHandler = (e) => {
    // 추가 버튼을 클릭했을때 할일
    // main 에 있는 todoListAdd 야 content 를 list에 추가해줘
    todoListAdd(content);
    setContent("");
  };

  return (
    <div className="input">
      <input placeholder="TODO" value={content} onChange={inputChangeHandler} />
      {/**
       * JSX 주석달기
       * 본문의 tag 내에서 사용하는 주석문
       *
       * button disabled 속성
       * html 에서는 disabled = "disabled" 라고 속성을 지정하면
       * button tag에 click 속성이 사라지는 효과를 낼 수 있다
       * button : disabled style 을 지정해 주면 button disabled 가 설정될시 모양 만들수 있다.
       *
       * react 에서는 disabled={true} 라는 속성으로 사용한다.
       *
       */}
      <button onClick={btnClickHandler} disabled={content.length < 2}>
        저장
      </button>
    </div>
  );
};

export default TodoInput;
