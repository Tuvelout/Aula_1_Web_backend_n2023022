//part 1
// var myLogModule = require('./Log.js'); 
// myLogModule.info('Node.js started'); //podemos exportar mais doque funções 
//part 2
// var person = require('./Person.js');
// var person1 = new person('James', 'Bond');
// console.log(person1.fullName());

//part3 😎
var arrayUtils = require('./ArrayUtils'); //importar
//arrays
var array = [2,3,7,0,1];
var array1 = [9,-4,2,1,3]
//valores
var value = 3;
//subarray
var startindex = 2;
var endindex = 4;
//swap
var index1 = 1
var index2 = 2

//console.log(arrayUtils.indexOf(array,value))
//console.log(arrayUtils.subArray(array,startindex,endindex))
//console.log(arrayUtils.isSameLength(array,array1))
console.log(arrayUtils.swap(array,index1,index2)) //para que serve o method swap 
