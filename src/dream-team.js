const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 */
function createDreamTeam(members) {
 let mas=[];
 if (Array.isArray(members)){
   for (let value of members){
     if (typeof value == 'string'){
       mas.push((value.toUpperCase().match(/\b\w/i)));
     }
   }
   return mas.sort().join('');
 }
 else return false;
}
module.exports = {
  createDreamTeam
};