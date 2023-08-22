import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BucketMain, { mainLoader, mainAction } from "../comps/BucketMain";
// import { bucketLoader, bucketAction } from "../modules/routerAction";
import BucketUpdate, { updateLoader } from "../comps/BucketUpdate";

/**
 *  const router = createBrowserRouter([]);
 *  RouterProvider 에 연결하려 각종 Routing 을 수행하는 설정 만들기
 *
 *  createBrowserRouter([]); 함수를 사용하여 router 객체 생성
 * path 를 지정하고 path 따라 열리는 컴포넌트를 설정
 */

const router = createBrowserRouter([
  {
    path: "/",
    element: <BucketMain />,
    loader: mainLoader,
    action: mainAction,
    children: [
      { path: "content/:id", element: <BucketUpdate />, loader: updateLoader },
    ],
  },
]);

/**
 *  < react-router-dom 을 사용한 화면 layout  구현하는 도구 >
 *
 * ...provider 는 프로젝트 전반에서 routing(path 변경, 클릭, 다른화면 전환 등)을 구현해 주는 도구
 * Provider로 감싸는 부분은 router 를 사용한 data handing 이 가능하다.
 *
 * router v6.4 이상에서는 Routing 을 구현 할때 BrowserRouter 컴포넌트를 사용하지 않고,
 * crateBrowserRouter() 함수를 사용한다.
 *
 * ...Provider 는 crateBrowserRouter()  함수로 만든 routing 환견을 쉽게 구현 하도록 도와주는 도구가 된다.
 */

const MainRouterProvider = () => {
  return <RouterProvider router={router} />;
};

export default MainRouterProvider;
