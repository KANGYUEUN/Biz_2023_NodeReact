# React Router

- React project 에서 navigation을 구현하기 위해 별도의 Router를 설정해야 한다.
- 도구 설치 : `npm install react-router-dom`
- react-router-dom 은 5.x버전과 6.x 버전은 호환되지 않는다.
- 6.x 버전에서는 Navigation 설정 부분이 새롭게 만들어지고,
  Menu 만들기가 매우 쉬워짐.

## react-router-dom 을 이용한 Menu 생성

- `NavList.jsx`파일에서 화면에 보여질 메뉴 를 구현
- `NavLink`컴포넌트를 사용하여 각 a Link 를 구현
- `MainRouter.js`(Navigation Provier ) 에서 Link 가 클릭되었을때 보여질 화면의 Layout 구현
- 최상단의 index.js 에 부착하고 App.js를 최 상단 layout 컴포넌트로 구현
- App.js 에는 `<Outlet />` 컴포넌트가 위치하고 여기에 메뉴를 클릭 했을때 보여질 컴포넌트 들이 위치 하게 된다.
