import logo from "./logo.svg";
import "./css/App.css";
import { useEffect, useState } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModules";
import { BBsContextProvider } from "./provider/BBsProvider";

function App() {
  const [title, setTitle] = useState("");

  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
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
      <BBsContextProvider>
        <BBsMain />
      </BBsContextProvider>
    </div>
  );
}

export default App;
