'use strict';
console.log('Truth table for conjunction');
console.log('var1\tvar2\tvar1 || var2');
let var1 = true;
let var2 = true;

console.log(var1 + '\t' + var2 + '\t' + (var1 || var2));
console.log(var1 + '\t' + !var2 + '\t' + (var1 || !var2));
console.log(!var1 + '\t' + var2 + '\t' + (!var1 || var2));
console.log(!var1 + '\t' + !var2 + '\t' + (!var1 || !var2));
