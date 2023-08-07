/**
 * 현재 화면의 모든 html tag 가 다 그려진 다음에 시작하라
 *
 */

const $ = (x, parent = document) => {
  return parent.querySelector(x);
};

/**
 * < Element 는 html로 구현하는 모든 tag 의 부모 tag >
 *
 * Element.prototype : 기본적으로 JS, HTMl 에서 제공 하지 않는 함수를 추가할때 사용하는 키워드
 * Element.prototype.css = function() : Element tag 에 css 라는 이름으로 새로운 함수를 하나 등록.
 * prototype 으로 함수를 등록할때는 function 키워드로 함수를 만든다
 *
 */
Element.prototype.css = function (key, value) {
  this.style[key] = value;
};

Element.prototype.html = function (value) {
  this.innerHTML = value;
};

document.addEventListener("DOMContentLoaded", () => {
  // 아래의 두코드는 결과가 같다.
  document.querySelector("div.home").backgroundColor = "blue";
  $("div.home").style.backgroundColor = "blue";

  // JS는 기존의 코드를 계속 확장 시킬 수 있다
  // 아래의 4개 코드는 서로 결과값이 같다.
  document.querySelector("div.bbs").css("color", "red");
  document.querySelector("div.bbs").style["color"] = "red";
  document.querySelector("div.bbs").style.color = "red";
  $("div.bbs").css("color", "red");

  $("div.mypage").html("여기는 나의 페이지야 접근 금지!!!");
  document.querySelector("div.mypage").innerHTML = "하하하";
});
