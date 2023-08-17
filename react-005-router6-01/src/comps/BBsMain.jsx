import { useState, useEffect } from "react";
import { useRoutes, Outlet, NavLink, Navigate } from "react-router-dom";
import BBsList from "./BBsList";
import BBsInput from "./BBsInput";
import { BBsDto as bbsData, BBsList as bbsListData } from "../data/BBsData";

const BBsMain = () => {
  const [bbsDto, setBbsDto] = useState(bbsData);
  const [bbsList, setBbsList] = useState(bbsListData);

  const BBsBody = () => {
    return (
      <>
        <h3>자유게시판</h3>
        <Outlet />
      </>
    );
  };
  const bbsRouter = useRoutes([
    {
      // rootPath : /bbs 로 요청
      path: "/",
      element: <BBsBody />,
      children: [
        {
          // path에 ""이 연결된 경우
          // rootPath 와 함께제일 먼저 보여질
          path: "",
          element: (
            <>
              <BBsList bbsList={bbsList} />
              <NavLink to="/bbs/writer">글쓰기</NavLink>,
            </>
          ),
        },
        { path: "writer", element: <BBsInput /> },
        // Navigate Component
        // 무조건 redirect 하기위해 사용
        // to 에 지정한 URL path로 화면 전환
        { path: "home", element: <Navigate to="/" /> },
      ],
    },
  ]);
  return bbsRouter;
};

export default BBsMain;
