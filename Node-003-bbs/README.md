# NodeJS + Express + MySQL + Sequelize 연동 프로젝트

- 프로젝트 생성 : `npx express-21c (project name) -s` 반드시 -s 를 포함
- DB Model 생성하기

1. sequelize-auto 설치 : `npm install -g sequelize-auto`
2. MySql2 엔진 설치 : `npm install -g myslq2`
3. 터미널 창 열어서 `sequelize-auto` 실행하여 화면이 나타나는지 확인하기

## sequelize 를 사용하여 기존 DB 에서 Model 추출하기

- model 정보 저장할 임시 폴더 생성 : `db_make`
- 만약 터미널에서 생성한다면 : `$ mkdir db_make`
- DB Model 추출(db_make 폴더에서 명령 실행)하기 : `sequelize-auto -h localhost -d imageDB -u root -x '!Biz8080'`

## sequlize model파일 편집하기

- 생성된 model 파일이 ES5 이전 방식으로 만들어진 파일 이기 때문에 ES5+ 버전으로
  수동 변환 해 주어야 한다.

```JS
// 기존 코드
const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {}

// 변경된 코드
import Sequelize from 'sequelize'
export default (sequelize) => {
```

- 칼럼 설정 부분 코드 변경하기

```Js
// 기존 코드 중에 DataTypes.*
return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },

// 변경된 코드 Sequelize.DataTypes.*
return sequelize.define(
    "tbl_bbs",
    {
      b_seq: {
        autoIncrement: true,
        type: Sequelize.DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
      },
```

- 변경된 model 들을 init-models 에 등록하기

```JS
// model 파일 import 하기
import _tbl_bbs from './tbl_bbs.js'
import _tbl_files from './tbl_files.js'

// initModels 함수에 model 설정코드 추가

const initModels = (sequelize) => {
  // model 이름 설정하기
  const tbl_bbs = _tbl_bbs(sequelize);
  const tbl_files = _tbl_files(sequelize);

  // 외부에서 사용가능 하도록 설정하기
  return {
    tbl_bbs,
    tbl_files,
  };
};
```

## 기타 설정

- `app.js`에서 DB.sequelize.sync() 함수 점검
- server start, table 삭제후, 서버 re start 하여 table 생성 되어있는지 확인하기
