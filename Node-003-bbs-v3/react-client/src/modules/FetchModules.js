const URL = {
  HELLO: "/bbs",
  BBS_INSERT: "/bbs/insert",
  BBS_LIST: "/bbs/list",
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

export const getBbsList = async () => {
  try {
    const response = await fetch(URL.BBS_LIST);
    const BbsList = response.json();
    return BbsList;
  } catch (error) {
    return [];
  }
};

export const bbsInsert = async (formData) => {
  const fetchData = {
    method: "POST",
    body: formData,
  };
  const response = await fetch(URL.BBS_INSERT, fetchData);
};
