const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) !== true) return false;
  let result = '';
  members.forEach(function(element) {
    if (typeof element === 'string') {
      for (let i = 0; i < element.length; i++) {
          if (element[i] !== ' ') {
            result += element[i].toUpperCase();
            break;
          } 
      }
    }
  });
  return result.split('').sort().join('');
};
