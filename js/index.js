let openBtn = document.querySelector('.modal__open')
let closeBtn = document.querySelector('.modal__close')
let modal = document.querySelector('.modal__background')
let formBtn = document.querySelector('.form__btn')
let inputShow = document.querySelector('.text-password')
let button = document.querySelector('.show-password')
let error = document.getElementById('error')
let errorTwo = document.getElementById('error1')
let errorThree = document.getElementById('error2')
let inputName = document.getElementById('input-name')
let inputEmail = document.getElementById('input-email')
let inputPass = document.getElementById('input-password')



const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	if ((vInputName() == true) && (vInputEmail() == true) && (vInputPass() == true)) {
		const formData = new FormData(form);
		console.log(formData.get('name'));
		console.log(formData.get('email'))
		console.log(formData.get('pass'))
		modal.classList.remove('active')
		document.querySelector('.warning').style.visibility = 'visible';
		setTimeout(function () {
			document.querySelector('.warning').style.visibility = 'hidden';
		}, 3000);
	}
})


openBtn.addEventListener('click', () => {
	modal.classList.add('active')
})

closeBtn.addEventListener('click', () => {
	modal.classList.remove('active');
})

formBtn.addEventListener('click', () => {
	if ((vInputName() == true) && (vInputEmail() == true) && (vInputPass() == true)) {
		modal.classList.remove('active')
	} else { }
})

window.onclick = function (e) {
	if (e.target == modal) {
		modal.classList.remove('active')
	}
}

button.addEventListener('click', () => {
	if (inputShow.getAttribute('type') == 'password') {
		inputShow.removeAttribute('type');
		inputShow.setAttribute('type', 'text');
	} else {
		inputShow.removeAttribute('type');
		inputShow.setAttribute('type', 'password');
	}
})

inputName.addEventListener('blur', () => {
	vInputName()
})

inputName.addEventListener('focus', () => {
	if (inputName.classList.contains('invalid')) {
		inputName.classList.remove('invalid');
		error.innerHTML = ""
	}
})

inputEmail.addEventListener('blur', () => {
	vInputEmail()
})

inputEmail.addEventListener('focus', () => {
	if (inputEmail.classList.contains('invalid')) {
		inputEmail.classList.remove('invalid');
		errorTwo.innerHTML = ""
	}
})

inputPass.addEventListener('blur', () => {
	vInputPass()
})

inputPass.addEventListener('focus', () => {
	if (inputPass.classList.contains('invalid')) {
		inputPass.classList.remove('invalid');
		errorThree.innerHTML = ""
	}
})

function vInputPass() {
	if (inputPass.value.length < 6) {
		inputPass.classList.add('invalid');
		inputPass.setCustomValidity("Пароль должен состоять минимум из 6 символов")
		errorThree.innerHTML = 'Пароль должен состоять минимум из 6 символов'
		return false
	}
	return true
}

function vInputEmail() {
	if (!inputEmail.value.includes('@')) {
		inputEmail.classList.add('invalid');
		inputEmail.setCustomValidity("Пожалуйста, введите правильный email.")
		errorTwo.innerHTML = 'Пожалуйста, введите правильный email.'
		return false
	}
	return true
}

function vInputName() {
	if (inputName.value.length < 2) {
		inputName.classList.add('invalid');
		inputName.setCustomValidity("Имя не может состоять из 1 буквы")
		error.innerHTML = 'Имя не может состоять из 1 буквы'
		return false
	}
	return true
}