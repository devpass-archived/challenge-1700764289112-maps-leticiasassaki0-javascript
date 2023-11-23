const calculateSum = require('./calculateSum');

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
myMap.set('c', 3);

const sum = calculateSum(myMap);
console.log('Sum:', sum);