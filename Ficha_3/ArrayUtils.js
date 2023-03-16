// module.exports = {
//     isEmpty : function(array){ //True ou undefined menos linhas de código
//         return array.length == 0;
//     }

// }

module.exports = {
    isEmpty: function (array) {
        if (array.length == 0) {
            return true;
        }
        else {
            return false;
        }
    },
    max: function (array) {
        var max = array[0];
        var l = array.length;
        for (var i = 1; i < l; i++) {
            if (i > max) {
                max = array[i]
            }
        }
        return max;
    },
    min: function (array) {
        var min = array[0];
        var l = array.length;
        for (var i = 1; i < l; i++) {
            if (i < min) {
                min = array[i]
            }
        }
        return min;
    },
    average: function (array) {
        return "Bruh";
    },
    indexOf: function (array, value) {
        for (let i = 0; i == array.length; i++) {
            if (value == array[i]) {
                return i;
            }
            else {
                return "não encontrado";
            }
        }
    },
    subArray: function (array, startindex, endindex) {
        let subarray = []
        for (let i = startindex; i <= array[endindex]; i++) {
            subarray.push(array[i]);
        }
        return subarray;
    },
    isSameLength : function (array, array1) {
        if (array.length == array1.length){
            return "they are the same length";
        }
    },
    reverse : function (array) {
        console.log("Bruh")
    }, 
    swap : function (array,index1,index2) {
        let novo_array = array;
        novo_array[index1] = array[index2]; 
        novo_array[index2] = array[index1];
        return novo_array;
    },
    contains : function (array,value) { //homework
    
    }



}
