'use strict';
console.log('Truth table for conjunction');
console.log('var1\tvar2\tvar3\tvar1 && var2 && var3');
let var1 = true;
let var2 = true;
let var3 = true;

console.log(var1 + '\t' + var2 + '\t' + var3 + '\t' + (var1 || var2 || var3));
console.log(!var1 + '\t' + var2 + '\t' + var3 + '\t' + (!var1 || var2 || var3));
console.log(var1 + '\t' + !var2 + '\t' + var3 + '\t' + (var1 || !var2 || var3));
console.log(var1 + '\t' + var2 + '\t' + !var3 + '\t' + (var1 || var2 || !var3));
console.log(!var1 + '\t' + !var2 + '\t' + var3 + '\t' + (!var1 || !var2 || var3));
console.log(var1 + '\t' + !var2 + '\t' + !var3 + '\t' + (var1 || !var2 || !var3));
console.log(!var1 + '\t' + var2 + '\t' + !var3 + '\t' + (!var1 || var2 || !var3));
console.log(!var1 + '\t' + !var2 + '\t' + !var3 + '\t' + (!var1 || !var2 || !var3));
