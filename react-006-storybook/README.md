# React StoryBook

- react 의 컴포넌트 관리 프로젝트

## StoryBook 프로젝트를 위한 도구설치 후 프로젝트에 적용하기

- 방법

```bash
1. npm install -g storybook

3. npx create-react-app [project]

4. cd [project]

5. storybook init
```

- 다시 storybook start

```bash
npm run storybook

```

```bash
2. npm install -g @storybook

3. npx create-react-app [project]

4. cd [project]

5. getstorybook init


```

## react BucketList Project

- dependecies

```json
"dependencies": {
        "moment": "^2.29.4",
       "react": "^18.2.0",
       "react-dom": "^18.2.0",
       "react-router-dom": "^6.15.0",
       "react-scripts": "5.0.1",
       "react-uuid": "^2.0.0",
       "styled-components": "^6.0.7",

}

```

## React Router DOM 의 Data Router

- V5까지 사용하던 `BrowserRouter` 와 같은 컴포넌트 방식의 Router 를 대체하고, 데이터와 연동되는 Router를 쉽게 구현 할 수 있도록
  새롭게 V6에서 추가된 함수들

- `BrowserRouter`를 대체하는 `createBrowserRouter` 등이 있다.
- 브라우저 라우터는 APP 전체를 감싸는 provider 역할을 수행하는 컴포넌트 이다.
- DataRouter 는 별도의 Provider 를 사용한다.
