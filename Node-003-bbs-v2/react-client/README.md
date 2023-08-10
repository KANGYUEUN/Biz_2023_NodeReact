# NodeJs 서버와 연동되는 React Client (2023-08-09)

## react 의 실행 port 변경하기

- NodeJS 서버와 React 개발환경의 Server 의 실행 port 가 모두 3000 으로 서로 겹쳐 문제 일으킴.
- NodeJS 에서 port 를 변경할 수 있지만, React 의 실행 스크립트를 변경하여 port 를 변경하자

- `package.json` 파일의 다음 start 스크립트 설정을 변경한다.

```JSON
// 원래 의 스크립트
"start": "react-scripts start",

//  port 를 5000 으로 변경한 스크립트
"start": "set PORT=5000 && react-scripts start",

// 리눅스, max 환경에서 변경
"start": "exprot PORT=5000 && react-scripts start",
```

## NodeJs SEVER 와 연동에서 CORS 오류 방지 위한 설정

- `package.json` 에서 다음 항목 추가하기

```JSON
// 변경전
"private": true,
  "dependencies": {}

// 변경후
"private": true,
"proxy": "http://localhost:3000/"
  "dependencies": {}
```

## React project를 NodeJs 폴더에 포함 시키기

- React 프로젝트를 NodeJS 폴더로 이동시킨다.
- 이름 변경 : `react-client`
- Node의 bin/app.js 의 다음 항목을 변경한다.

```JS
// 변경전
app.use(express.static(path.join("public")));
// 변경후
// static으로 react 폴더를 지정해주기
app.use(express.static(path.join("react-client/build")));
```

- react-client 터미널 창에서 명령 실행 : `npm run build`
- 이렇게 설정을 하면 NodeJS 의 `http://localhost:3000/`을 열면 리엑트의 화면이 열린다.
- react 코드 변경시 다시 `npm run build`를 해주어야 한다.

## React 의 시작 방법 변경하기 (build 재시작 번거로움 재거)

- 기존 시작 방법 : `npm run start`
- 새로운 react 시작 방법 : `nodemon --exec "react-scripts buid"`
- 단, 이 방법은 기존의 React Hot Loading 기능을 사용하기 어렵다.
- 때문에 기존의 Hot Loading 방법을 사용하려면 또 하나의 터미널을 열어 `npm run start`를 실행해 줘야 한다.

- 기본 상태에서는 nodemon이 계속 재 시작한다.
- nodemon은 현재 react-client 폴더에 있는 어떠한 파일이라도 변경이 되면 자동 재 시작된다.
- nodemon 의 실행을 다소 재한할 필요가 있다.
