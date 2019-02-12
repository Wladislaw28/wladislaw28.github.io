// 

// Этот код програмирует на движение элементов их анимацию, самый крутой сервис. Важно у элемнов стилях должен быть дисплей блок или блок инлайн

//$(document).ready(function() {anime({
//   targets: '#test span#t1',
//   translateX: [
//     { value: 16, duration: 40 },
//     { value: 0, duration: 40 }
//   ],
//   translateY: [
//     { value: -16, duration: 40 },
//     { value: 0, duration: 40 }
//   ],
//   easing: 'linear',
//   delay: (t,i) => anime.random(800,8000),
//   loop: true
// });});





// Эта херня ниже раньше делала мини пэинт внутри холста канвас
// window.onload = function(e){ 
	
// 	var a1 = document.getElementById("a1");
// 	var cont = document.getElementById("section0");
// 	cont.onmousemove = moveEvent;
// 	var timer;	
// 	var xPos;
// 	var yPos;
// 	var posObjx;
// 	var posObjy;
	
// 	function moveEvent(){
// 	var e;
// 	if(!e){
// 	e = window.event;
// 	}
// 	xPos = e.clientX;
// 	yPos = e.clientY;
// 	timer = setInterval(animateMove,50);
// 	}
	
// 	function animateMove(){
// 	posObjx = parseInt(a1.style.left);
// 	posObjy = parseInt(a1.style.top);
// 	a1.style.left = Math.round(xPos/10) + "px";
// 	a1.style.top = Math.round(yPos/20) + "px";
// 	clearInterval(timer);
// 	}	
// };



// Моя самая дикая разработка. Каждые 100 милисекунд проверяет значения в элементах cvet, cvet2. На сайте там раньше были инпуты, Суть не в этом. Этим механизмом можно запрограмировать постояное изменение стилей в элементах
// Работает для неограниченно количества элементов с заданным селектором или айди

setInterval(function cikl() { 

	var cvet = '#00ffff';
	var cvet2 = '#0000ff';				 		

	var gr = document.querySelectorAll(".gradient"); 
	for (var i = 0; i < gr.length; i++) { 
		var elem7 = gr[i];
		elem7.style.cssText = 'background: linear-gradient(120deg,' + cvet2 +' 20%, ' + cvet +' 70%);-webkit-background-clip: text;border-image:linear-gradient(120deg,' + cvet2 +' 20%, ' + cvet + ' 70%);border-image-slice:1';
	}
	var h2 = document.querySelectorAll('.gradient2');
	for (var i = 0; i < h2.length; i++) {
		var elem3 = h2[i];
		elem3.style.cssText = 'color:'+ cvet +';border-image: linear-gradient(120deg,' + cvet2 +' 20%, ' + cvet +' 70%);border-image-slice: 1;';
	}
	//menu
    document.querySelector('.navbar-default .navbar-nav > .active > a').style.color = cvet;
	var a = document.querySelectorAll('.navbar-default .navbar-nav a');
	for (var i = 0; i < a.length; i++) {
		var elem4 = a[i];
		elem4.style.cssText ='color:'+ cvet2 +' !important';
	}
  var s = document.querySelectorAll("#fp-nav ul li a.active span");
  var s2 = document.querySelectorAll(".fp-slidesNav ul li a.active span");  
  var bx = document.querySelectorAll("#menu li a:hover");
  for (var i = 0; i < bx.length; i++) {
    var elem6 = bx[i];
    elem6.style.boxShadowColor = cvet;
  }
  for (var i = 0; i < s.length; i++) {
      var elem = s[i];
      elem.style.background = cvet;
  };
  for (var i = 0; i < s2.length; i++) {
      var elem2 = s2[i];
      elem2.style.background = cvet;
  };
},100);













