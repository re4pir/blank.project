// //Задача 1

let valueKm = prompt("Введите значение для перевода из км/ч в м/с: ")
let valueMs = prompt("Введите значение для перевода из м/с в км/ч: ")
console.log(`${valueKm} км/ч соответствует ${valueKm / 3.6} м/c`)
console.log(`${valueMs} м/с соответствует ${valueMs * 3.6} км/ч`)


//Задача 2
let FirstSide = +prompt("Введите первую сторону треугольника")
let SecondSide = +prompt("Введите вторую сторону треугольника")
let ThirdSide = +prompt("Введите вторую сторону треугольника")

if (FirstSide + SecondSide > ThirdSide && SecondSide + ThirdSide > FirstSide && FirstSide + ThirdSide > SecondSide) {
	console.log("Треугольник существует")
	let perimeter = FirstSide + SecondSide + ThirdSide
	let halfPerimetr = perimeter / 2
	S = Math.sqrt(halfPerimetr * (halfPerimetr - FirstSide) * (halfPerimetr - SecondSide) * (halfPerimetr - ThirdSide))
	ratio = perimeter / S
	console.log(`перемитр = ${perimeter}`)
	console.log(`Площадь = ${S}`)
	console.log(`Соотношение = ${ratio}`)
} else {
	console.log("Треугольник не существует")
}

//Задача 3
do {
	x = prompt('Введите значение X= ');
} while (isNaN(x)) {
	for (let i = 0; i < x + 1; i ++) {
		if (i % 5 == 0) {
			console.log(`${i} fizz-buzz`)
		} else if (i % 2 == 0) {
			console.log(`${i} buzz`)
		} else {
			console.log(`${i} fizz`)
		}
	}
}

//Задача 4

let lines = +prompt("Введите кол-во рядов ёлки" )
let str = ""
let star = "*"
let cage = "##"
i = 1

while (i < lines + 1) {
	if (i % 2 == 1) {
		str += star
		str += "\n"
		star += "**"
	}else {
		str += cage
		str += "\n"
		cage += "##"
	}
	i++
}
console.log(str)


//Задача  5

function randomNumber() {
	let number = Math.floor(Math.random() * 100);
	while(true) {
		let result = prompt("Введите число ")
		if (result === null) {
			return null
		}
		if (isNaN(result)== false){
			if (result == number) {
				return alert("Вы угадали число")
			} else if (result < number) {
				alert(`Ваше число ${result} меньше загаданного `)
			} else {
				alert(`Ваше число ${result} больше загаданного`)
			}
		}
	}
}



//Задача 6

let number = +prompt("Введите число которое хотите проверить ")
let firstNumber = +prompt("Введите число с которым хотите проверить")
let secondNumber = +prompt("Введите второе число с которым хотите проверить")

if (number % firstNumber == 0 && number % secondNumber == 0) {
	console.log(`n = ${number}, x = ${firstNumber}, y = ${secondNumber} => ${true}`)
} else {
	console.log(`n = ${number}, x = ${firstNumber}, y = ${secondNumber} => ${false}`)
}

//Задача 7

let month = +prompt("Введите месяц который вы хотите проверить ")

if (month < 1  || month > 12) {
	console.log(`Такого месяца нет`)
} else if (month <= 3) {
	console.log(`месяц ${month} => 1 квартал`)
} else if (month <= 6) {
	console.log(`месяц ${month} => 2 квартал`)
} else if (month <= 9) {1
	console.log(`месяц ${month} => 3 квартал`)
} else {
	console.log(`месяц ${month} => 4 квартал`)
}