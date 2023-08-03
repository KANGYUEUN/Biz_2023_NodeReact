const student = {
  이름: "홍길동",
  나이: 16,
  전화번호: "010-111-1111",
};

// JSON 에서 각각의 요소를 개별 변수로 추출하기
const 이름 = student.이름;
const 나이 = student.이름;
const 전화 = student.이름;

const student1 = {
  name: "홍길동",
  age: 16,
  tel: "010-111-1111",
};

// ES6만들어진 객체의 구조분해
// 객체의 각 속성(변수항목)을 분해하여
// 개별변수로 생성하기
const { name, age, tel } = student;
console.log(student1.name);
console.log(name);

// 객체를 구조분해 하면 "객체.속성" 형식으로 사용하기 보다
// 각 속성에 값을 참조할때 코드를 짧게 할 수 있다.

// 전개 연산자를 사용하여 객체 통으로 복제하기
// 객체 일때는 전개연산자를 앞에 붙인다
// 앞쪽에 부착하는 전개연산자를 "나머지(Rest)연산자" 라고 한다
const { ...all } = student1;

console.log(all);

const address = {
  성명: "홍길동",
  주소: "서울시",
  전화번호: "010-111-1111",
  나이: 20,
  취미: "독서",
};

// < 객체의 구조분해 와 나머지 연산자 >
// address 객체로 부터 성명, 주소를 개별 변수로 분해하고
// 나머지(전화,나이,취미) 는 또 다른 객체로 복제하는 구조분해
const { 성명, 주소, ...나머지 } = address;
console.log(성명, 주소, 나머지);

// 배열의 구조 분해
// n1 과 n2 에는 nums 배열의 0번({a:1}) 1번(2)가
// 각각 할당되는 변수가 나머지는 nAll 로 별도 배열 생성
const nums = [{ a: 1 }, 2, 3, 4, 5];
const [n1, n2, ...nAll] = nums;
console.log(n1, n2, nAll);

// 함수의 매개변수에 나머지 연산자 사용
const func = (num1, num2, ...nums) => {
  console.log(num1, num2);
  console.log(nums);
};

// func()호출 하면서 다수의 값을 전달하면
// 첫번째와 두번째는 일반 변수(num1, num2) 에 받고
// 나머지는 nums 에 배열처럼 받는다.
func(1, 2, 3, 4, 5, 5, 6, 7, 7, 7);

const func1 = (...nums) => {
  let sum = 0;
  nums.forEach((num) => {
    sum += num;
  });
  console.log(sum);
};

func1(10, 20, 5, 30, 1, 2, 3, 4, 1);

/**
 *  < JS 의 나머지 연산자 >
 * 원래는 배열을 위한 전개연산자로 사용 되었다.
 * 모든 요소의 마지막 위치에서 전개 연산자가 붙은
 * 변수가 발견 되면 나머지 연산자로 형태가 변경된다.
 *
 * 나머지 연산자는 배열의 나머지 요소,
 * 객체의 나머지 요소 함수에서 매개변수의 나머지
 * 요소들을 배열로 만들어 값을 취하게 된다.
 */
