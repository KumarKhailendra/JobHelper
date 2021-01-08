let elem = document.querySelector(".splash-ctnr");
console.log(elem);
setTimeout(slideUp, 3000);
function slideUp() {
	elem.style.top = "-100vh";
}
