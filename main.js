$(document).ready(function(){
  var btn1 = document.getElementById("first-button");
  var btn2 = document.getElementById("second-button");
  var btn3 = document.getElementById("third-button");

  function buttonClicked1(){
    $('#main-content').removeClass();
    $('#main-content').addClass('first-color');
  }
  function buttonClicked2(){
    $('#main-content').removeClass();
    $('#main-content').addClass('second-color');
  }
  function buttonClicked3(){
    $('#main-content').removeClass();
    $('#main-content').addClass('third-color');
  }

  btn1.addEventListener("click", buttonClicked1);
  btn2.addEventListener("click", buttonClicked2);
  btn3.addEventListener("click", buttonClicked3);
});
