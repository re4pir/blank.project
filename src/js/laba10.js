// Задача 1

function ConvertSpeed(value, name) {
    if (name == "toMS") {
        return(`${value} км/ч соответствует ${value / 3.6} м/c`)
    } else if (name == "toKMH"){
        return(`${value} м/с соответствует ${value * 3.6} км/ч`) 
    } else {
        return(alert("Значения введины неправильно"))
    }
}

// Задача 2

function absValue(number) { 

	if (number == 0) {
		return 0
	}
	if (number < 0) {
        return number * -1
    }
	return number

}



// Задача 3 


let student = {
    "group": "221-323",
    "last_name": "Бастун",
    "first_name": "Андрей",
}

console.log(`Список свойств: ${Object.keys(student)}`)
console.log(`Студент ${Object.values(student)[1]} ${Object.values(student)[2]} учится в ${Object.values(student)[0]} группе`)


//Задача 4

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min) 
}

//Задача 5

let arr = [1,15,3,32,5,6,7,8,9]


function randomArr(array, number) {
    let newArr = []
	
    for (let i = 0; i < number; i++ ) {
        
        newArr.push(array[randomNumber(0, array.length)])
    }
    return newArr
}
