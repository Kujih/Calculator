 const calculatorScreen = document.querySelector('.calculator-screen')
 const updateScreen = (number) => {
     calculatorScreen.value = number
 }

const numbers = document.querySelectorAll(".number")


let prevNumber =''
let calculationOperator =''
let currentNumber = '0'

const inputNumber = (number) => {
    if (currentNumber === '0'){
    currentNumber = number
    }
    else {
        currentNumber += number
    }
    
}

 numbers.forEach((number) => {
     number.addEventListener('click', () =>{
        inputNumber(event.target.value)
        updateScreen(currentNumber)
     })
 })

const operators = document.querySelectorAll(".operator")


 const inputOperator = (operator) => {
    if (calculationOperator === ''){
    prevNumber = currentNumber   
    } 
     calculationOperator = operator
     currentNumber = ''
 }

 operators.forEach((operator) => {
     operator.addEventListener('click', (event) =>{
        inputOperator (event.target.value)
     })
 })

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener('click' ,() =>{
    calculate()
    updateScreen (currentNumber)
})

const calculate =() => {
    let result = '' 
    switch (calculationOperator) {
        case "+" :
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case "-" :
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case "*" :
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break
        case "/" :
        result = parseFloat(prevNumber) + parseFloat(currentNumber)
        break    
        default:
        
    }
    currentNumber = result
    calculationOperator = ''
}

const clear = document.querySelector('.all-clear')

const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}
clear.addEventListener ('click', () => {
    clearAll()
    updateScreen(currentNumber)
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot
}

const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value)
    updateScreen(currentNumber)
})
