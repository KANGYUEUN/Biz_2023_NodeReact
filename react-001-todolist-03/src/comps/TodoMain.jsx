import TodoInput from "./TodoInput";
import { useState, useEffect } from "react";
import "../css/Todo.css";
import TodoList from "./TodoList";

// initData.js 에서 export 한 함수들 중에서
// initData() 함수만 필요하니 구조분해를 통해서 import
// initData().initData() => 사용하는 방법
import { initData } from "../data/initData";

// uuid.func()
// uuid() => 이렇게 사용해도 됨
// react-uuid 의 export type 이 무엇일까?
// export default 임
import uuid from "react-uuid";

const TodoMain = () => {
  /**
   * < State 끌어올리기 >
   * TodoInput 과 TodoList 에 있던 2개의 state 들을 TodoMain 부모 컴포넌트로 이동
   * 1. TodoInput 에서 입력된 content state 의 값을
   * 2. TodoList 의 todoLsit state 배열에 추가하여
   * 3. TodoList > TodoItem 을 통하여 화면에 출력을 해야한다.
   *
   * 이 상황에서 TodoInput 과 TodoList 는 같은 부모의 형제간이다
   * React 에서는 형제간에 state를 절대 공유 할 수 없다
   *
   * React 에서는 부모가 만들어서 전달해준 State 만 볼 수 있다
   * 자식이 만든 state 는 부모도 볼 수 없다
   *
   * 이 상황을 해결 하기 위하여 자식 Comps 에 있던 state 와 state 함수를
   * 부모 Comps 인 TodoMain 으로 끌어 올리기를 한다
   * 그리고, 자식 Comps 에게 전달 해 주어야 한다.
   */

  // initData() 함수를 실행하면
  // initData() 함수가 생성한 (return 한 ) 객체로 todo를 초기화
  const [todo, setTodo] = useState(() => initData());
  const [todoList, setTodoList] = useState(() => {
    return localStorage.getItem("TODOLIST")
      ? JSON.parse(localStorage.getItem("TODOLIST"))
      : [];
  });

  // useEffect() 함수 : F5 새로고침 하는 때
  // 화면이 Mount 되엇을때 (보일때)
  // 화면이 그려진 순간 (랜더링이 끝나는 순간 = 마운드)
  // 지워지는 순간 = un마운트 되는 순간의 event 를 켑쳐하는 순간
  useEffect(() => {
    const resetTodo = () => {
      setTodo(initData());
      console.log("Use Effect");
      localStorage.setItem("TODOLIST", JSON.stringify(todoList));
    };
    resetTodo();
  }, [todoList]);

  // 입력한 todoContent 를 사용하여 새로운 Todo 추가하기
  const todoListAdd = (content) => {
    const newTodo = { ...todo, id: uuid(), content: content };
    setTodoList([...todoList, newTodo]);
  };

  // Todo 완료처리
  const itemComplete = (id) => {
    const compTodoList = todoList.map((item) => {
      if (item.id === id) {
        // todo.complete 속성을 반전(NOT)시키기
        // true 이면 false, false 이면 true
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setTodoList([...compTodoList]);
  };

  const itemDelete = (id) => {
    // id 에 해당하는 데이터 삭제
    if (window.confirm("정말 삭제 할꼬니?")) {
      // list forEach 하면서 item의 id와 일치하는 데이터가 있으면
      // 해당 데이터를 제외하면서 새로운 리스트 만들기
      // 전달받은 Id 와 일치하지 않은 item 만 모아서 새로운 배열 만들기
      const deleteTodoList = todoList.filter((item) => {
        return item.id !== id;
      });
      setTodoList([...deleteTodoList]);
    }
  };
  // Content를 클릭 했을때 선택된 item 을 찾아주는 함수
  const updateItemSelect = (id) => {
    // 전달받은 id 값은 PK 적인 성질을 가지므로
    // id 에 해당하는 List 말 추출하면 그 결과는 item 이
    // 한개인 List 가 생성된다
    const selectTodoList = todoList.filter((item) => {
      return item.id === id;
    });

    // update 를 위한 Todo 데이터 생성
    setTodo({ ...selectTodoList[0] });
  };

  // 내용을 변경하고 저장을 클릭 했을때 Update and Insert 를
  // 실행 하는 함수
  const todoInput = (content) => {
    // id 값이 null or "" 이면 List 에 추가하기
    if (!todo.id) {
      todoListAdd(content);
      // id 값이 null or "" 이 아니면 Update 실행
    } else {
      const updateTodoList = todoList.map((item) => {
        if (item.id === todo.id) {
          return { ...item, content: content };
        }
        return item;
      });
      //  < setState 함수 >
      // todoList 를 setting 하는 함수
      setTodoList(updateTodoList);
    }
    // initData 초기화 시키기
    // Add or Updata 를 실행 후 Todo 를 초기화 하기
    setTodo(initData());
  };
  return (
    <div className="todo">
      <TodoInput todo={todo} setTodo={setTodo} todoInput={todoInput} />
      <TodoList
        todoList={todoList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default TodoMain;
