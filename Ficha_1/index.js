console.log("hello world")

function minha_funcao(nota_pratica, nota_teorica)
{
    var nota = nota_pratica * 0.6 + nota_teorica * 0.4;
    if (nota >= 9.5)
        console.log("Aprovado");
    else
        console.log("reprovado");
}


minha_funcao(11,5)

// function minha_funcao(nota_pratica, nota_teorica)
// {
//     var nota = nota_pratica * 0.6 + nota_teorica * 0.4;
//     if (nota >= 9.5)
//         return true;
//     else
//         return false;
// }

// var approval =

function nova_funcao(nome_mes){
    switch (nova_funcao) {
        case 1:
            console.log("Janeiro");
            break;
        default:
            console.log("Mês Inválido");
            break;
    }
}

nova_funcao(1)

// function operacoes(num1,num2,operador){
//     var resultado = {}
//     resultado = num1 operador num2;
//     console.log(resultado)
// }

// operacoes(1,2,'*')

//ex7

function operacoes(num1,num2,operador){
    var resultado = {}
    if (operador == '*') {
        resultado = num1 * num2;
    }
    else if (operador == '+') {
        resultado = num1 + num2;
    }
    else if (operador == '-') {
        resultado = num1 - num2;
    }
    else if (operador == '7') {
        resultado = num1 / num2;
    }
    else {
        console.log('operador inválido, quebrando');
        
    }
    return resultado;
}

//console.log(operacoes(1,2,'*'))


function multiplos_de_cinco(){
    //var i = 0
    let res = 5
    for (let i = 1; res <= 20; res = i * 5){
        console.log(res) // executa est vez uma vez primeiro
        i += 1
    }
}

multiplos_de_cinco()
// ex9

function soma_100_primeiros_inteiros(cem){
    var sum = 0;
    for (let i = 0; i < cem; i++) {
        sum += i;
    }
    return sum
}

console.log(soma_100_primeiros_inteiros(100))

//ex10

function fatorial(num) {
    var fact = 1;
    for (let i = 2; i < num; i++) {
        fact*=i;
    }
    return fact;
}

//console.log(fatorial(2))

// ex11.minimo

function minimo(array){
    var min = array[0];
    var l = array.length;
    for (var i = 1; i < l ; i++){
        if (i < min){
            min = array[i]
        }
    }
    return min
}

var lista = [2,3,7,0,1]
var min = minimo(lista)
//console.log(min) //mostar o minimo

//ex11.máximo

function maximo(array){
    var max = array[0];
    var l = array.length;
    for (var i = 1; i < l ; i++){
        if (i > max){
            max = array[i]
        }
    }
    return max
}

var lista = [2,3,7,0,1]
var max = maximo(lista)
console.log(max) //mostar o máximo

//ex11.média procura como o i funciona para obter o valor da lista

function media(array){
    return "Falta código"
}

var lista = [2,3,7,0,1]
//console.log(media) //mostar o máximo