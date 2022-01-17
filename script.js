//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let age = 18
if(age >= 18){
    console.log("você pode ser preso")
}else{
    console.log("você não pode ser preso")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a variável "humano" seja true
let humano = true
if(age >= 18 && humano == true){
    console.log("você é maior de idade")
}else{
    console.log("você não é maior de idade")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let aniversario = "Novembro"
if(aniversario == "Janeiro" || aniversario == "Dezembro"){
    console.log("você faz aniversário em janeiro ou dezembro")
}else{
    console.log("você faz aniversário em qualquer outro mês")
}
//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Mariana"
if(nome[0] == "R"){
    console.log("seu nome começa com R")
}else{
    console.log("seu nome não começa com R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Reinaldo"
if(sobrenome.length >= 6 || nome[0] == "E"){
    console.log("seu sobrenome tem mais de 6 letras ou seu nome começa com a letra E")
}else{
    console.log("seu sobrenome não tem mais de 6 letras ou seu nome não começa com a letra E")
}
