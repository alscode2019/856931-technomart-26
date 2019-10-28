var link = document.querySelector(".feedback-link");
var popap = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var form = popap.querySelector("form");
var validation = popap.querySelectorAll(".modal-input");

// Открытие - закрытие окна обратной связи
link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popap.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popap.classList.remove("modal-show");
	popap.classList.remove("modal-error");
});

// Закрываем по ESC

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popap.classList.contains("modal-show")) {
            evt.preventDefault();
            popap.classList.remove("modal-show");
            popap.classList.remove("modal-error");
        }
    }
});

// Проверка на заполнение полей

var popap = document.querySelector(".modal-feedback");
var inputs = popap.querySelectorAll("input");
var form = popap.querySelector("form");
var name;
var mail;

form.addEventListener("submit", function (evt) {

	for (var i=0; i<inputs.length; i++){
		 name = inputs[0].value;
		 mail = inputs[1].value;
	}
		if (!name || !mail){
			evt.preventDefault();
			popap.classList.remove ("modal-error");
		 popap.offsetWidth = popap.offsetWidth;
			popap.classList.add("modal-error");
			}
	else {
		popap.classList.remove("modal-error");
		popap.classList.remove("modal-show");
		}
});

