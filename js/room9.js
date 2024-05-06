let digits = [];
let circle = document.getElementById("circle");
let buttons = document.getElementsByClassName('button');
let text = document.querySelector('input[type="text"]');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener('click', check);
}
let cancel=document.getElementById("cancel");
cancel.addEventListener('click',cancelLast);
let open1=document.getElementById("open");
open1.addEventListener('click',openCoder);
function check() {
	let audio = new Audio('../צלילים/button.ogg');
			audio.play();
	let num = parseInt(event.currentTarget.textContent);
	digits.push(num);
	text.value = digits.join("");
	if (digits.length == 4 && digits.join('') === '0841') {
		circle.style.backgroundColor = "green";
		if (localStorage.getItem("level") < 9)
			localStorage.setItem("level", 9);
			document.body.style.backgroundColor = "url('')";
			document.getElementById("header").style.display = "none";
			document.getElementById("background").style.display = "none";
			document.getElementById("coder").style.display = "none";;
			document.getElementById("door").style.display = "inline";
			document.getElementById("arrow").style.display = "inline";
			open1.removeEventListener('click', openCoder);
			let audio = new Audio('../צלילים/open.wav');
			audio.play();  
	  let o=document.getElementById("arrow").addEventListener("click",function(){   
		  window.location.href = "../html/index.html";

	  })
	}
	else {
		if (digits.length > 4) {
			let audio = new Audio('../צלילים/fail.wav');
			audio.play();
			while (digits.length > 0) {
				digits.shift();
				text.value = digits.join("");
			}
		}
	}
}
function cancelLast() {
	if (digits.length > 0) {
		digits = digits.slice(0, -1);
		text.value = digits.join("");
	}
}
function openCoder() {
	let coder = document.getElementById("coder");
	coder.style.display = "block"
}