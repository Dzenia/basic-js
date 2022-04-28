const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
 let ratedec=0;
 if(typeof sampleActivity=='string' && parseFloat(sampleActivity)) ratedec = parseFloat(sampleActivity);
else return false;

if(ratedec>=15||ratedec <=0) return false
const a=0.693;

let b = (Math.log(MODERN_ACTIVITY/ratedec))/(a/HALF_LIFE_PERIOD);
return Math.ceil(b);


}

module.exports = {
  dateSample
};
