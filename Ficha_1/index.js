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