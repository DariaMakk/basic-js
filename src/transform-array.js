const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let array = [];
  if (Array.isArray(arr) === false) throw new Error('Not array!');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '--discard-next') {
        if (i !== arr.length) i++;
    } else if (arr[i] === '--discard-prev') {
        if (i > 0 && arr[i - 2] !== '--discard-next') array.pop();
    } else if (arr[i] === '--double-next') {
        if (i !== arr.length - 1) array.push(arr[i + 1])
    } else if (arr[i] === '--double-prev') {
        if (i > 0 && arr[i - 2] !== '--discard-next') array.push(arr[i - 1])
    } else {
      array.push(arr[i]);
    }
  } 
  return array;
};


