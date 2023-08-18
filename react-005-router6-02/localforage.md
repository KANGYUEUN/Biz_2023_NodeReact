# React 의 LocalForage

- 설치 : `npm install localforage`
- react 의 `localforage`는 IndexedDB를 핸들링 하는데 마치 JS 의 localStorgae에 데이터를
  저장, 읽기 하는 것처럼 매우 쉽게 적용 될 수 있도록 만들어진 3rd party LIB 이다.
- 데이터 저장 : `localforage.setItem("DOC 이름", data)`
- 데이터 읽기 : `localforage.getItem("DOC 이름")`
- localStorage 는 데이터를 보관할때 반드시 문자열화 해야함.
  하지만, localforage를 통한 indexedDB 는 데이터를 사용하던 원래대로 저장하고 원래대로 복원 된다.

## Web Browser 의 IndexedDB(indexed Database API)

- 2015년 모질라 재단에서 표준으로 설정한 브라우저에 저장하는 DBMS 규격
- 모든 Data는 index(색인)을 갖는 JSON type 으로 데이터를 저장
- JSON type 으로 저장하는 DB를 보통 `NoSQL` 이라고 한다.
- 기본적으로 VanilaJS 를 통하여 웹브라우저에 데이터를 저장한다.
- 현재 IE와 아이폰, 아이패드의 Safari 를 제외한 거의 대부분의 브라우저에서 지원한다.
- 향후에는 브라우저를 통해서 컴퓨터의 로컬디스트에 물리적인 방법으로 데이터를 저장하는 부분까지 확장될 전망이다.

## NoSQL DBMS 의 특징

- 저장소(스키마), Entity 구조, 데이터의 type, 데이터의 길이 등에 상관없이
  데이터를 insert(create 추가) 함으로써 자동으로 구조가 만들어지는 DBMS.
- JSON 타입으로 데이터를 저장하며, 여러가지 프로그래밍 언어에서 구조에 상관없이 핸들링이 가능하다.
- 대량의 데이터를 순간적으로 insert 하는데 매우 유리하다.
