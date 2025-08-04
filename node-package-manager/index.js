const lodash = require('lodash');
const myOddEvenArray = lodash.partition([1, 2, 3, 4, 5, 6, 7, 8, 9], (num) => num % 2);


console.log(myOddEvenArray);

