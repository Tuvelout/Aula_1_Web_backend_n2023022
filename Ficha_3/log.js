var log = { //a info a branco é o nome da função e por ser um parametro tem esta sintaxe
        info: function (info){ // dentro das chavetas é um objeto
            console.log('Info: ' + info);
        },
        warning: function (warning) {
            console.log('Warning: ' + warning);
        },
        error: function (error) {
            console.log('Error: ' + error);   
        } 
}
module.exports = log