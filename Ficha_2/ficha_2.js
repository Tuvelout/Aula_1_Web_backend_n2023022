//ex1
function massa_corporal(peso,altura){ 
    var imc = peso / (altura *  altura)
    console.log('O seu peso imc é:' + imc);
    if(imc < 18.5){
        console.log("Abaixo do peso normal");
    }
    else if(imc >= 18.5 && imc < 25){
        console.log("no peso normal");
    }
    else if(imc >= 25 && imc < 30){
        console.log("acima do peso normal");
    }
    else{
        console.log("obeso");
    }
}

//massa_corporal(71,1.86)

//ex2
function reverteString(str){
    var strseparada = str.split("")
    for (let i = 0; i < strseparada.lenght; i++) {
        for (let j = strseparada.lengh[i] - 1; j >= 0; j--){
            reverseStr += splittedStr[i][j];
        }
        reversedStr += " ";
    }
    return reversedStr;
}

//console.log(reverteString('nope'))

//3

function conta_Vogais(str){
    var count = 0;
    for( var i = 0; i < str.length; i++){
        var vogal = str[i]
        if (vogal=='a' || vogal=='e'|| vogal=='i' || vogal=='o' || vogal=='u'){
            count ++;
        }
    }
    return count;
}

//console.log(conta_Vogais("a tua mae"))


//ex4

function conta_letra(str,letra){
    var count = 0;
    for( var i = 0; i < str.length; i++){
        if (str[i] == letra){
            count ++;
        }
    }
    return count;
}

//console.log(conta_letra("tuaa tia", "a"))

//ex5

//converter tudo para segundos, depois converter tudo para hora, minutos e segundos.
//hora, minutos e segundos de entra, 

function tempo_de_trabalho(he,me,se,hs,ms,ss){
    var tempo_de_entrada = he * 3600 + me * 60 + se;
    var tempo_de_saida = hs * 3600 + ms * 60 + ss;
    var total =  tempo_de_saida - tempo_de_entrada ;

    var h = total / 3600; // convertemos o total de segundos para horas 
    var resto_h = total % 3600; 

    console.log(resto_h);

    var resto_m = resto_h % 60;
    var m = (resto_h - resto_m) / 60; 

    //console.log(resto_m);

}

//tempo_de_trabalho(09, 00, 00, 21, 30, 00)

//ex6

function desenho(width,altura){
    console.log("Desenha retangulos");
    console.log("Largura:" + width);
    console.log("Altura:" + altura);
    var line = "";
    for(let i = 0; i < width; i++){
        line += "*"
    }
    for(let j = 0; j < altura; j++){
        console.log(line);
    }
}

//desenho(18,3)

//ex7

function triangulo(altura){
    console.log("Desenha retangulos");
    console.log("Altura:" + altura);
    var line = "";
    for(let i = 0; i < altura; i++){
        line += "*"
        console.log(line);        
    }
}

//triangulo(5)

//ex8

function caixa(size){
    console.log("Desenha retangulo");
 
    var box = "";
    for(let i = 0; i < size; i++){
        for(let j = 0; j < size; j++){
            if(i == 0 || i == size -1 || j == 0 || j == size -1){
                box+='*';
            }
        }
        box+='\n'        
    }
    console.log(box)
}

caixa(3,5)

//ex9 a

var student1 = {name: 'Pedro', grade: 20}
var student2= {name: 'Tio', grade: 3}
var student3 = {name: 'yo', grade: 18}

var student_lista = []; //percorrer a variavel usando um ciclo
student_lista.push(student1);
student_lista.push(student2);
student_lista.push(student3);

var grade = student_lista[1].grade //liga-se ao objeto

//c não b máximo
function maximo(array){
    var m = array[0];
    var bestStudent = array[0];
    for (let i = 0; i < array.length ; i++){
        for (let i = 0; i < array.length; i++) {
            if(array[i].grade > m)
            m = array[i].grade;
            bestStudent = array[i]
        }
        return bestStudent;
    }
}

console.log(maximo(student_lista)) //mostar o máximo

// d minimo

function minimo(array){
    var m = array[0];
    var bestStudent = array[0];
    for (let i = 0; i < array.length ; i++){
        for (let i = 0; i < array.length; i++) {
            if(array[i].grade < m)
            m = array[i].grade;
            bestStudent = array[i]
        }
        return bestStudent;
    }
}

//console.log(minimo(student_lista)) //mostar o máximo

//e média

//sei lá

function closestToAverage(studentList){
    var avg = averageGrade(studentList);
    for (let i = 0; i < studentList.length; i++){
        let diff = Math.abs(avg - studentList[i].grade);
        if(diff < min){
            min = diff;
            student = studentList[i];
        }
    }
    return student;
}

console.log(closestToAverage())

//f negativa~

function Listanegativa(array){
    var cout = 0;
    for (var i = 0; i < array.length; i ++){
        if (array[i].grade < 9.5){
            cont++ ;
        }
    }
}


