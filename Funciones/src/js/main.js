// Funciones

// Dates

let todayDate = new Date()                              //Cuando esta vacio da la Fecha actual
console.log(todayDate)
console.log('')

let anyDate = new Date('05/01/2015 10:25:12') 
console.log('')
console.log(anyDate)
console.log('')

// Getters

let todayYear = todayDate.getFullYear()
console.log('year',todayYear)
let todayMonth = todayDate.getMonth()+1                 // JAN 0 - DIC 11   from year
console.log('month',todayMonth)
let todayDay = todayDate.getDay()+1                     // DOM 0 - LUN 6    from week
console.log('day',todayDay)
let todaySingleDate = todayDate.getDate()               // 1 - 31           from month
console.log('date',todaySingleDate)
let todayMilisecs = todayDate.getMilliseconds()         // 1 - 999          from secs
console.log('milisecs',todayMilisecs)
let todayTime = todayDate.getTime()                     // Tiempo en Unix
console.log('time',todayTime)                           
let todayHours = todayDate.getHours()
let todayMinutes = todayDate.getMinutes()
let todaySeconds = todayDate.getSeconds()
console.log('hours',todayHours,'mins',todayMinutes,'secs',todaySeconds)


// Setters

let newDate = new Date()
console.log('')
console.log('Before change:')
console.log(newDate.toDateString())
console.log('')

console.log('After change:')
newDate.setDate(5)
newDate.setMonth(5)

console.log(newDate.toDateString())
console.log(newDate.toLocaleDateString())
console.log(newDate.toJSON())
console.log(newDate.toUTCString())

console.log('')

//                                                      // Ejercicio

let myDate = new Date()
let myDateMonth = myDate.setMonth(parseInt(prompt('Escribe el mes de tu cumple: '))-1)
let myDateDate = myDate.setDate(parseInt(prompt('Escribe el numero de dia de tu cumple: ')))

console.log('')
console.group('Tu cumple de este año es en:')
console.log(myDate.toDateString())
console.log('')

console.log('El mes de tu cumple es:')
switch(myDate.getDate()-1){
    case 0:
        console.log('January')
        break
    case 1:
        console.log('February')
        break
    case 2:
        console.log('March')
        break
    case 3:
        console.log('April')
        break
    case 4:
        console.log('May')
        break
    case 5:
        console.log('June')
        break
    case 6:
        console.log('July')
        break
    case 7:
        console.log('August')
        break
    case 8:
        console.log('September')
        break
    case 9:
        console.log('October')
        break
    case 10:
        console.log('November')
        break
    case 11:
        console.log('December')
        break
    default:
        console.log('Invalid month')
        break
}
console.log('')
console.log('El dia de tu cumple es:')
switch(myDate.getDay()){
    case 0:
        console.log('Sunday,',myDate.getDate())
        break
    case 1:
        console.log('Monday,',myDate.getDate())
        break
    case 2:
        console.log('Tuesday,',myDate.getDate())
        break
    case 3:
        console.log('Wednesday,',myDate.getDate())
        break
    case 4:
        console.log('Thursday,',myDate.getDate())
        break
    case 5:
        console.log('Friday,',myDate.getDate())
        break
    case 6:
        console.log('Saturday,',myDate.getDate())
        break
    default:
        console.log('Invalid day')
        break
}
console.groupEnd()

//                                                  A: Funciones Declarativas

console.log('')
function showHelloWorldDeclare(){
    console.log('Hello World')
}
showHelloWorldDeclare()

function sumDeclare(num1,num2){
    let ans = num1 + num2
    return ans
}

let sumDeclareAns = sumDeclare(-12,1)
console.log(sumDeclareAns)

//let message = confirm('¿Do You Really Want to Hurt Me?')
//console.log(message)
//console.log('')

//let employeeName = prompt('Escribe tu nombre, querido empleado: ')
//let employeeClan = prompt('Escribe tu clan, ' + employeeName + ': ')

function sayHiEmployees(employee, clan) {
    alert('Hello ' + employee + ' from clan ' + clan + ', it is a pleasure to meet you!')
    console.log('An employee arrived. Welcome, ' + employee + ' from clan ' + clan)
}
//sayHiEmployees(employeeName, employeeClan)

function sayByeEmployees(employee, clan) {
    alert('Good bye ' + employee + ' from clan ' + clan + ', have a nice day!')
    console.log('Our employee has left. Hope to see you later, ' + employee + ' from clan ' + clan)
}
//sayByeEmployees(employeeName, employeeClan)

//                                                  B: Funciones Expresivas

// Estas no las puedo llamar desde antes de definir la funciones. Se me daña todo

const showHelloWorldExpress = function (){
    console.log('Hello World')
}
showHelloWorldExpress()










//                                                  C: Funciones de Flecha

const showHelloWorldArrow = () => {
    console.log('Hello World')
}
showHelloWorldArrow()

//                                                  D: Funciones de 



