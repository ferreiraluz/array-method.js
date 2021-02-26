
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.

const array = ['a', 'b', 'c']

const sequenceArray = array.entries();

console.log(sequenceArray.next().value); // will return position and value. '0', 'a';

console.log(sequenceArray.next().value); // '1', 'b'


// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.


const first = ['a', 'b', 'c'];

const second = ['d', 'e', 'f'];

const third = first.concat(second);

console.log(third); // a, b, c, d, e, f


// The filter() method creates a new array with all elements that pass the test implemented by the provided function.


const n = [1, 2, 3, 4, 5];

const pair = n.filter(pairs => pairs % 2 == 0); // will return 2, 4

console.log(pair);


