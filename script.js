let number1 = prompt('Digite o primeiro número')
let number2 = prompt('Digite o segundo número')

number1 = +number1
number2 = +number2

let sum = number1 + number2
let sub = number1 - number2
let mult = number1 * number2
let div = number1 / number2
let rest = number1 % number2

alert(`a soma é ${sum}, a subtração é ${sub}, a multiplicação é ${mult}, a divisão é ${div} e o resto é ${rest}`)

if(rest == 0){
  alert('A soma dos dois números é par: ' + sum)
}else{
  alert('A soma dos dois números é impar: ' + sum)
}

if(number1 == number2){
  alert('Os números inseridos são iguais')
}else{
  alert('Os números inseridos são diferentes')
}
