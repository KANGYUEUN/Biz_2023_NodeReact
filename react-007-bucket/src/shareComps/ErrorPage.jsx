import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h1>에러</h1>
      <p>프로젝트에 문제발생 관리자에게 문의하시오</p>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
