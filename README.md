# NodeJS 와 React 프로젝트

## NodeJS 설치

- NodeJS Back-End Server 와 React Front-End 개발을 위한 도구
- Vanila JS 코드를 실행하고 테스트 할 수 있는 도구

## 개발도구 설치

`nodejs.org` 사이트 에서 NodeJS LTS 버전 다운로드 후 설치

- windows 에서는 관리자 권한으로 cmd 창 열고 도구 설치

1.  `npm -g install npm` : nodeJS Package Manager 프로그램으로 NodeJS 와 React 프로젝트에서 사용하는 여러가지 부수적 도구를 설치하는 도구
2.  `npm -g install nodemon` : Node Server Demon, 아주 작은 Server 실행도구. NodeJS 프로젝트의 소스를 변경후 저장을 하면 서버를 자동으로 재시작.

## React 폴더에서 vsCode 열기

- `node --version` : 설치된 nodejs 버전 확인

## NodeJS 서버 만들기

- React 폴더에 프로젝트폴더(Node-000-Hello)를 생성하기
- 생성된 폴더에서 터미널 창을 열고 `npm init` 명령 실행 => packge.json 파일이 생성된다.
- 이 파일에 NodeJS 프로젝트 설정 항목이 들어있다.
- 다음과 같이 package.json을 변경한다.

```
{
  "name": "000-hello",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "start": "node ./server.js"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```

## NodeJS + Express Server 만들기

1. NodeJS 를 이용한 Back-End Project 에서 가장 많이 사용하는 Framework 인 Express 를 사용하여 Server 만들기.
2. express-generator 를 이용한 Express Server 만들기 : `npx express [project]`
3. express-21c 를 이용한 ES6+ Express Server 만들기 : `npx express-21c [project]`

## React project 만들기

1. React 폴더에서 새로운 폴더 생성 `mkdir react-000-hello`
2. 프로젝트 시작 : `npm init`
3. package.json 에 다음설정

```json
{
  "name": "react-000-hello",
  "version": "1.0.0",
  "description": "",
  "private": true,
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrom version"]
  },
  "author": "",
  "license": "ISC"
}
```

4. depedency 설정

```bash
npm install react
npm install react-dom
npm install react-scripts
```

5.  project 구성

    1. `public 폴더 생성`, `index.html` 파일 생성후 <div#root> tag 생성

    ```html
    <body>
      <div id="root"></div>
    </body>
    ```

    2. `src` 폴더생성. `App.js` 파일 생성하고 코드입력

    ```js
    const App = () => {
      return (
        <div>
          <button>클릭하세요</button>
        </div>
      );
    };
    export default App;
    ```

    모듈을 만들기 위해 exprot 해야한다.

    3. `src/index.js` 파일 생성하고 코드 입력

       ```js
       import React from "react";
       import ReactDOM from "react-dom/client";
       import App from "./App";
       const root = ReactDOM.createRoot(document.querySelector("#root"));
       root.render(
         <React.StrictMode>
           <App />
         </React.StrictMode>
       );
       ```

## Create-react-app을 이용한 React Project 생성

`npx create-react-app [project]`

## NodeJS 와 React 연동할때 port 충돌 방지

- NodeJS 는 기본 3000port 에서 실행
- React 의 실행 port 변경
- package.json 의 다음 Script 변경

```json
"start" : "react-scripts start" 를
"start" : "set PORT=5000 && react-scripts start" 으로
```

- Mac ans Linux

```json
"start" : "react-scripts start" 를
"start" : "export PORT=5000 && react-scripts start" 으로
```
