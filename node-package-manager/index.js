
const lodash = require('lodash');

const names = ['khorshed', 'sadhin', 'asif', 'jahid', 'swapnil', 'emon', 'rifat'];
const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);
