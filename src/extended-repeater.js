const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let result = [];
  if (options.separator === undefined) options.separator = '+';
  if (options.additionSeparator == undefined) options.additionSeparator = '|';
  if(options.addition === undefined) options.addition = '';
  if (options.addition == null) options.addition = 'null';
  if (options.repeatTimes == undefined) options.repeatTimes = 1;
  if (options.additionRepeatTimes == undefined) options.additionRepeatTimes = 1;
  for (let i = 0; i < options.repeatTimes; i++) {
    let newStr = [];
    for(let j = 0; j < options.additionRepeatTimes; j++) {
        newStr.push(options.addition);
    }
    result.push(str + newStr.join(options.additionSeparator));
}

 return result.join(options.separator);
};


