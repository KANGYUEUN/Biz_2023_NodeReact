// 지금부터 여기는 DOM HTML JS 영역이다.
document.addEventListener("DOMContentLoaded", () => {});

// 아래 두 코드는 동일하다
// 지금부터 여기는 JQuery 스크립트 영역이다
document.addEventListener("DOMContentLoaded", () => {});
$(document).ready(function () {});
$(function () {});
$(() => {
  $("div.home").html("반갑습니다");
  $("div.bbs").css("color", "blue");

  //   const divs1 = document.querySelectorAll("div main");
  //   const onClickHandler = (e) => {
  //     const text = e.currentTarget.innerText;
  //     alert(text);
  //   };

  // querySelectorAll 과 같다
  const divs = $("div.main");
  divs.on("click", function (e) {
    const text = this.innerText;
    alert(text);
  });
}); // 이코드 권장
