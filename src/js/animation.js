let card = document.querySelector(".animation__card")

card.addEventListener('mousemove', rotate)
card.addEventListener('mouseout', returnRotate)

function rotate(e) {
	let cardItem = this.querySelector('.animation__item')
	let middle = cardItem.offsetHeight / 2

	cardItem.style.transform = 'rotateX('+-(e.offsetY - middle)/8 +'deg) rotateY(' + (e.offsetX - middle) / 8 +'deg)' 
}

function returnRotate(e) {
	let cardItem = this.querySelector('.animation__item')

	cardItem.style.transform = `rotateX(${e.offsetY = 0}deg) rotateY(${e.offsetX = 0}deg)` 

}