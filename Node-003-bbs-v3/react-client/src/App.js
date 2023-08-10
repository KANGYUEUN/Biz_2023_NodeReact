import logo from "./logo.svg";
import "./css/App.css";
import { useEffect, useState } from "react";
import NavList from "./layout/NavList";
import { hello } from "./modules/FetchModules";
import { Outlet } from "react-router-dom";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");

  // 화면이 mount 될때 작동되도록 event 핸들러 등록하기
  // 두번째 파라메터를 빈(blank)배열([])로 추가하면
  // Effect() 의해 실행할 함수는 화면이 rendering 된 후 한번만 실행된다.
  // useEffect(()=> {실행할 함수()}, [])

  // hello() 함수는 await 를 부착하여 결과를 기다려야 한다
  // 이 함수에 await를 부착하기 위해서는 이함수를 감싼 함수에 async 를 부착해야 한다.
  // useEffect()의 첫번째 함수에는 async 를 부착 할 수 없다.

  // 즉시 실행 함수로 만들기
  // 익명 함수 호출방식
  // 생성된 함수를 바로 사용하기
  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
    // fetchTitle();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다 React BBS 프로젝트 입니다."}</p>
        <div className="input">
          <input placeholder="입력하기" className="main_input"></input>
        </div>
      </header>
      <NavList />
      {/* Router 에서 children 으로 설정된 component 가 표시되는 위치 */}
      <Outlet />
    </div>
  );
}

export default App;
