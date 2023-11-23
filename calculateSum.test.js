const calculateSum = require('./calculateSum');

test('Calculate sum of map values', () => {
  const myMap = new Map();
  myMap.set('a', 1);
  myMap.set('b', 2);
  myMap.set('c', 3);
  expect(calculateSum(myMap)).toBe(6);
});