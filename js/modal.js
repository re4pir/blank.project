let openBtn = document.querySelector('.modal__open')
let closeBtn = document.querySelector('.modal__close')
let modal = document.querySelector('.modal')

openBtn.addEventListener('click', () => {
	modal.classList.add('active')
})

closeBtn.addEventListener('click', () => {
	modal.classList.remove('active');
})

window.onclick = function(e) {
	if (e.target == modal) {
		modal.classList.remove('active')
	}
}