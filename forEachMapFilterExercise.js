// forEach map filter

// doubleValues
// Write the functions necessary for the tests to pass, you can find the
// tests in the downloaded code.
function doubleValues(arr) {
  const results = [];
  arr.forEach(el => {
    results.push(el * 2);
  })
  return results;
}
console.log('\ndoubleValues')
console.log(doubleValues([1,2,3])) // [2,4,6]
console.log(doubleValues([5,1,2,3,10])) // [10,2,4,6,20]


// onlyEvenValues
// Write a function called onlyEvenValues which accepts an array and returns
// a new array with only the even values in the array passed to the function

function onlyEvenValues(arr) {
  const results = [];
  arr.forEach(el => {
    if (el % 2 === 0) {
      results.push(el);
    }
  })
  return results;
}
console.log('\nonlyEvenValues')
console.log(onlyEvenValues([1,2,3])) // [2]
console.log(onlyEvenValues([5,1,2,3,10])) // [2,10]

// showFirstAndLast
// Write a function called showFirstAndLast which accepts an array of strings and
// returns a new array with only the first and last character of each string.
function showFirstAndLast(arr) {
  const results = [];
  arr.forEach( name => {
    const firstLetter = name[0];
    const lastLetter = name[name.length-1];
    results.push(firstLetter + lastLetter);
  })
  return results;
}
console.log('\nShowFirstAndLast')
console.log(showFirstAndLast(['colt','matt', 'tim', 'test'])) // ["ct", "mt", "tm", "tt"]
console.log(showFirstAndLast(['hi', 'goodbye', 'smile'])) // ['hi', 'ge', 'se']


// addKeyAndValue
// Write a function called addKeyAndValue which accepts an array of objects, a key,
// and a value and returns the array passed to the function with the new key and value
// added for each object

// How can I add a key/value pair to a JavaScript object?
// https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object

function addKeyAndValue(arr, key, val) {
  const results = [];
  arr.forEach(person => {
    person[key] = val;
    results.push(person);
  })
  return results;
}

console.log('\naddKeyAndValue')
console.log(addKeyAndValue(
[
  {name: 'Elie'},
  {name: 'Tim'},
  {name: 'Matt'},
  {name: 'Colt'}
],
  'title',
  'instructor'
))

/*
  [
    {name: 'Elie', title:'instructor'},
    {name: 'Tim', title:'instructor'},
    {name: 'Matt', title:'instructor'},
    {name: 'Colt', title:'instructor'}
  ]
*/

// vowelCount
// Write a function called vowelCount which accepts a string and returns an object
// with the keys as the vowel and the values as the number of times the vowel
// appears in the string. This function should be case insensitive so a lowercase
// letter and uppercase letter should count

function vowelCount(str) {
  const vowels = 'aeiou';
  const vowelsHash = {};
  strArr = str.split('')
  strArr.forEach(letter => {
    const lowerCaseLetter = letter.toLowerCase();
    if (vowels.includes(lowerCaseLetter)) {
      if (vowelsHash[lowerCaseLetter] === undefined) {
        vowelsHash[lowerCaseLetter] = 1;
      } else {
        vowelsHash[lowerCaseLetter] += 1;
      }
    }
  })
  return vowelsHash;
}

console.log('\nvowelCount')
console.log(vowelCount('Elie')) // {e:2,i:1};
console.log(vowelCount('Tim')) // {i:1};
console.log(vowelCount('Matt')) // {a:1})
console.log(vowelCount('hmmm')) // {};
console.log(vowelCount('I Am awesome and so are you')) // {i: 1, a: 4, e: 3, o: 3, u: 1}

// map
// doubleValuesWithMap
// Write a function called doubleValuesWithMap which accepts an array and returns
// a new array with all the values in the array passed to the function doubled

function doubleValuesWithMap(arr) {
  return arr.map(val => {
    return val * 2;
  })
}
console.log('\ndoubleValuesWithMap')
console.log(doubleValuesWithMap([1,2,3])) // [2,4,6]
console.log(doubleValuesWithMap([1,-2,-3])) // [2,-4,-6]

// valTimesIndex
// Write a function called valTimesIndex which accepts an array and returns a new array
// with each value multiplied by the index it is currently at in the array.
function valTimesIndex(arr) {
  return arr.map( (num, i) => {
    return num * i;
  })
}
console.log('\nvalTimesIndex')
console.log(valTimesIndex([1,2,3])) // [0,2,6]
console.log(valTimesIndex([1,-2,-3])) // [0,-2,-6]

// extractKey
// Write a function called extractKey which accepts an array of objects and some key and
// returns a new array with the value of that key in each object.

function extractKey(arr, key) {
  return arr.map( el => {
    return el[key];
  })
}
console.log('\nExtractKey')
console.log(extractKey(
  [
    {name: 'Elie'},
    {name: 'Tim'},
    {name: 'Matt'},
    {name: 'Colt'}
  ],
  'name'
))
// ['Elie', 'Tim', Matt', 'Colt']

// extractFullName
// Write a function called extractFullName which accepts an array of objects and returns a
// new array with the value of the key with a name of “first” and the value of a key with the
// name of “last” in each object, concatenated together with a space.

function extractFullName(arr) {
  return arr.map(el => {
    return `${el.first} ${el.last}`;
  })
}

console.log('\nextractFullName')
console.log(extractFullName([
  {first: 'Elie', last:"Schoppik"},
  {first: 'Tim', last:"Garcia"},
  {first: 'Matt', last:"Lane"},
  {first: 'Colt', last:"Steele"}
]))
// ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']


// filter
// filterByValue
// Write a function called filterByValue which accepts an array of objects and a key
// and returns a new array with all the objects that contain that key.
function filterByValue(arr, key) {
  return arr.filter(person => {
    return person[key] === true;
  })
}

console.log('\nfilterByValue')
console.log(filterByValue(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'Matt', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner'
  ))
  
  /*
    [
      {first: 'Tim', last:"Garcia", isCatOwner: true},
      {first: 'Colt', last:"Steele", isCatOwner: true}
    ]
  */

// find
// Write a function called find which accepts an array and a value and returns the first
// element in the array that has the same value as the second parameter or undefined if
// the value is not found in the array.
function find(arr, target) {
  const resultingArr = arr.filter(num => {
    if (num === target) return target;
  })
  // remember, filter always returns AN ARRAY!
  return resultingArr.length === 0 ? undefined : resultingArr[0];
}
console.log('\nfind')
// Not asking for an array, but an integer or undefined.
console.log(find([1,2,3,4,5], 3)) // 3
console.log(find([1,2,3,4,5], 10)) // undefined

// findInObj
// Write a function called findInObj which accepts an array of objects, a key, and
// some value to search for and returns the first found value in the array.

function findInObj(arr, key, val) {
  return arr.filter(person => {
    return person[key] === val;
  })
}

console.log('\nfindInObj')
console.log(findInObj(
  [
    {first: 'Elie', last:"Schoppik"},
    {first: 'Tim', last:"Garcia", isCatOwner: true},
    {first: 'att', last:"Lane"},
    {first: 'Colt', last:"Steele", isCatOwner: true}
  ],
  'isCatOwner',
  true
))

// {first: 'Tim', last:"Garcia", isCatOwner: true}
// {first: 'Colt', last:"Steele", isCatOwner: true}

// removeVowels
// Write a function called removeVowels which accepts a string and returns a new string
// with all of the vowels (both uppercased and lowercased) removed. Every character in
// the new string should be lowercased.
function removeVowels(str) {
  const strArray = str.toLowerCase().split('');
  const vowels = 'aeiou';
  const lowerCaseNoVowelsArr = strArray.filter(char => {
    return !(vowels.includes(char));
  })
  return lowerCaseNoVowelsArr.join('')
}
console.log('\nremoveVowels')
console.log(removeVowels('Elie')) // 'l'
console.log(removeVowels('TIM')) // 'tm'
console.log(removeVowels('ZZZZZZ')) // 'zzzzzz'

// doubleOddNumbers
// Write a function called doubleOddNumbers which accepts an array and returns a new array
// with all of the odd numbers doubled (HINT - you can use map and filter to double and
// then filter the odd numbers).

function doubleOddNumbers(arr) {
  return arr.filter(num => {
    return num % 2 === 1;
  }).map(num => {
    return num * 2;
  })
}
console.log('\ndoubleOddNumbers');
console.log(doubleOddNumbers([1,2,3,4,5])) // [2,6,10]
console.log(doubleOddNumbers([4,4,4,4,4])) // []
