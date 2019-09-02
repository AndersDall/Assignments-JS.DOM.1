/*
The program must accept input of a number from the user.
Assume the number is a CPR number (a danish social security number).
Make JavaScript write on the console true or false as to whether the person holding the number is a woman.
*/

var cpr = Number(prompt('Indtast CPR nummer'));
var dame = cpr % 2;
console.log(`True for dame og false for mand = ${dame !== 1}`); //Hvis det er en dame siger den true
