window.alert('Vamos ver quantas letras tem seu nome?')//alerta
var nome = window.prompt(` Qual seu nome?`)//var guarda o nome
document.write(` Olá ${nome} Seu nome tem ${nome.length} letra <br> `)// o length informa o comprimento do nome ou frase.
document.write(`Seu nome em maiúsculo é ${nome.toUpperCase()} <br>`) // o toUpperCase é ára dexar a letra maiúscila
document.write(`Seu nome em minusculo é ${  nome.toLowerCase()} <br>`) //o toLoweCase é ára deixar a letra minuscula

//Organizar numeros 
var n1 = 21.9856331
window.alert( n1.toFixed(2).replace('.',','))
// n1.toFixed(2)// quantidade de numeros após a virgula 
// n1.toFixed(3).replace('.','!')// O replace substitui o pornto por virgula
//...

function Somar() {
    var num1 = document.getElementById("n1").value;
    var num2 = document.getElementById("n2").value;
    var resiltado = document.getElementById("res");
    num1 = Number(num1)
    num2 = Number(num2)
    resu = num1 + num2
    resiltado.innerHTML = (` O resultado da soma entre ${ num1} + ${num2} é igual a ${resu}`)   
}
 
