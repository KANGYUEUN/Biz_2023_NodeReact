import logo from "./logo.svg";
import "./App.css";
import MainRouterProvider from "./layout/MainRoter";

/**
 * < react-router-dom v6 의 Navigate >
 * 어떤 URL로 요청이 들어 왔을때 다른 URL 로 즉시 Redirect 하고자 할때
 *
 * localhost:3000/로 요청이 들어오면 localhost:3000/bucket 으로 보내라(이동해라 )
 */
// const appRouter = createBrowserRouter([
//   { path: "/", element: <Navigate to="/bucket" /> },
//   { path: "bucket/*", element: <BucketMain /> },
// ]);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section className="main">
        <MainRouterProvider />
      </section>
    </div>
  );
}

export default App;
