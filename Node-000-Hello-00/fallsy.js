// false, falsy, falsey 라는 개념
// boolean type
const yes = true;
const no = false;

const strNull = null; // object
const strBlank = ""; // string
const numZero = 0; // number
let valUndefined; // undefined
const numNaN = NaN; // number
const notNum = 0n; //  bigint

// 변수 strNull 의 데이터 타입이 무엇인가
console.log(typeof strNull); // object
console.log(typeof strBlank); // string
console.log(typeof numZero); // number
console.log(typeof valUndefined); // undefined
console.log(typeof numNaN); // number
console.log(typeof notNum); //  bigint

// 위에서 선언한 변수들을 if() 명령문에 포함 하거나
// ! 연산자를 동반하면 이 변수들의 성질이 true, false 인가? 로 바뀐다.
// falsy, falsey 형 데이터 라고 한다. ( 코드가 간단해진다.)
if (!strNull) console.log("strNull 은", typeof strNull);
if (!strBlank) console.log("strNull 은", typeof strBlank);
if (!numZero) console.log("strNull 은", typeof numZero);
if (!valUndefined) console.log("strNull 은", typeof valUndefined);
if (!numNaN) console.log("strNull 은", typeof numNaN);
if (!notNum) console.log("strNull 은", typeof notNum);

const num = 0;
if (num === 0) {
  console.log("Num 은 0 이다");
} else {
  console.log("Num 은 0 이 아니다");
}
if (!num) console.log("진짜로 Num 은 0 이네");

const strName = null;
if (!strName) console.log("이름이 없다");
if (strNum === null || strName === "") console.log("이름이 없다");

console.log(strName || "홍길동");

const 구매자 = strName || "구매자 없음";
const 판매자 = "판매자 없음";
if (strName !== null && strName !== "") {
  판매자 = strName;
}

// console.log(typeof strNull); // object
// console.log(typeof strBlank); // string
// console.log(typeof numZero); // number
// console.log(typeof valUndefined); // undefined
// console.log(typeof numNaN); // number
// console.log(typeof notNum); //  bigint
