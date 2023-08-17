import logo from "./logo.svg";
import "./css/App.css";
import { useRoutes, Outlet, useNavigate } from "react-router-dom";
import BBsMain from "./comps/BBsMain";
import { Button } from "./styled/BBsStyled";

/**
 * < react-router-dom 의 useNavigate hooks 함수 >
 * react-router-dom에서 다른 페이지를 열고자 할때 NaviLink를 사용하여 a tag 통해 페이지를 전환한다.
 *
 * 하지만, button 등 tag를 사용할때는 onClick event 를 켑쳐하여 페이지를 전환 해야 하는데
 * 이때ㅑ는 NavLink 를 사용하기가 다소 어렵다.
 *
 * 이럴때 useNavigate() hook 함수를 통해 객체를 생성하고,
 * 생성한 객체에 URL(requestPath)를 설정하면
 * JS document.location.href = URL 과 같은 코드를 사용하는 것과 같다.
 *
 * v5에서는 useHistory, Link, useRedirect 등 여러 함수와 객체가 있었다.
 * v6에서는 대부분 useNavigate() Hooks를 통해여 생성된 객체로 통합 되었다.
 *
 * 특히, useRedirect 의 경우 별도로 Navigate Component를 통해 실행 가능 하다.
 */

/**
 * App Component 를
 * react-router-dom v6 에서 useRouter() Hook 함수를 생성하고
 * router 를 return 하는 구조로 변경한다.
 *
 */
function App() {
  // useNavigate Hooks 함수를 사용하여 navigate 객체 생성하기
  const navigate = useNavigate();
  // App Component 내에 inner Component 를 생성하기
  const AppBody = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Outlet />
      </div>
    );
  }; // end AppBody

  // Hooks 함수 사용하여 path를 보고 <AppBody>를 호출한다.
  // App.js 를 화면에 표현하면, react-router-dom 에 의해 path를 감지하고
  // AppBody Component 를 화면에 rendering 한다.
  const appRouter = useRoutes([
    {
      path: "/",
      element: (
        <>
          <AppBody />
        </>
      ),
      children: [
        {
          path: "",
          element: (
            <Button
              bgColor="#aaa"
              color="#fafafa"
              onClick={() => navigate("/bbs")}
            >
              게시판 열기
            </Button>
          ),
        },
        { path: "bbs/*", element: <BBsMain /> },
      ],
    },
  ]);
  return appRouter;
}

export default App;
