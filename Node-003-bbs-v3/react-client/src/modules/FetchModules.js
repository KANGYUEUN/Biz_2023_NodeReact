/**
 * < 매직스트링, 매직넘버링 사용금지 >
 * 코딩을 하다 보면 따옴표로 둘러쌓인 문자열, 직접 숫자로 작성된 데이터를
 * 사용할 일이 많다. 이러한 데이터가 어디선가 비교문에 사용되거나, 참조되는 경우
 * 문자열 일때 대소문자 or 스펠링, 띄어쓰기
 * 숫자 일때 예기치 못한 값이 포함되어 전체 로직에 문제가 될수 있다.
 *
 * 이러한 문제는 쉽게 발견하기 어렵다.
 * 매직 리터럴(스트링, 숫자 값)을 직접 사용하지 말고,
 * 전역적으로 변수를 선언하고 그 변수를 참조하여 코딩해야 한다.
 */
// java final static 으로 문자열을 미리 만들어 두고
// 가져다 사용하는것을 JS 에서 응용 하기 위한것
const URL = {
  HELLO: "/bbs",
  BBS_INSERT: "/bbs/insert",
};

// 함수 선언문에 export 를 붙이면 개별 함수가 export  된다.
// export { hello } 한 것과 같다.
export const hello = async () => {
  // proxy에 설정된 URL과 합성 하여 http://localhost:3000/bbs 로 요청하기
  const res = await fetch(URL.HELLO);
  const json = await res.json();
  console.log(json);
  //   setTitle(json.title);
  return json.title;
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL.BBS_INSERT, fetchData);
};
