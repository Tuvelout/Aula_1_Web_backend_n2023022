module.exports = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName ;
    this.fullName = function () {
        return this.firstName + ' ' + this.lastName; //this permite aceder ao objeto e as suas propriedades
    }
}