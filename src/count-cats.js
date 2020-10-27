const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  if (!backyard) return false;
   let number = 0;
   for (let i = 0; i < backyard.length; i++) {
     let a = backyard[i];
     for (let j = 0; j < a.length; j++) {
       if (a[j] == '^^') {
         number++;
       }
     }
   };
   return number;
};
