const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') return false; 
  if (!sampleActivity) return false;
    let a = Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity));
    let k = (0.693 / HALF_LIFE_PERIOD);
    let t = Math.round(a / k);
    if(Number.isInteger(t) && t >= 0) {
      return t;
    } else {
      return false;
    }

};
