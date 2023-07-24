// 1. toString()
let cars = ['audi', 'benz', 'bmw', 'toyota']
let carNames = cars.toString();
//console.log(carNames)
//ans- audi,benz,bmw,toyota
//The toString() method is a JavaScript library function used to convert the given object to its corresponding string representation. toString in javascript can be used with numbers, strings, arrays, and objects.


// 2. join()
let carsNames = ['audi', 'benz', 'bmw', 'toyota']
let joinCars = carsNames.join(' and ')
// console.log(joinCars)
//audi and benz and bmw and toyota
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string.


// 3. concat()
let names = ['vinay', 'paru', 'rudra']
let names2 = ['adarsh', 'preethi', 'aami']
let concatNames = names.concat(names2)
// console.log(concatNames)
// ans- [ 'vinay', 'paru', 'rudra', 'adarsh', 'preethi', 'aami' ]
// The concat() method is used to merge two or more arrays. 
//This method does not change the existing arrays, but instead returns a new array.

// 4. splice()
let list = ['arun', 'subu', 'kannan', 'kichu']
// let splicedList = list.splice(1, 2);
// console.log(splicedList)
//ans-  [ 'subu', 'kannan' ]
// console.log(list)
// ans- [ 'arun', 'kichu' ]
// let addedSplicedList = list.splice(1, 2, 'vinay','adarsh')
// console.log(addedSplicedList)
// ans- [ 'subu', 'kannan' ]
// console.log(list)
// ans-[ 'arun', 'vinay', 'adarsh', 'kichu' ]
// The splice() method adds and/or removes array elements.
// The splice() method overwrites the original array.
// syntax - array.splice(index, howmany, item1, ....., itemX)

// 5. slice()
let fruits = ['apple', 'orange', 'grapes', 'banana']
let slicedFruits = fruits.slice(1, 3)
// console.log(slicedFruits)
// ans- [ 'orange', 'grapes' ]
// console.log(fruits)
// The slice() method returns selected elements in an array, as a new array.
// The slice() method selects from a given start, up to a (not inclusive) given end.
// The slice() method does not change the original array.

// 6. flat()
let array = ['messi', 'dybala', 'mbappe', ['vinay', 'adarsh']]
let flatArray = array.flat()
// console.log(flatArray)
// [ 'messi', 'dybala', 'mbappe', 'vinay', 'adarsh' ]
let array2 = ['messi', 'dybala', 'mbappe', ['vinay', 'adarsh'], ['paru', 'achu']]
let flatArray2 = array2.flat(2)
// console.log(flatArray2)
// ans- [
//     'messi',  'dybala',
//     'mbappe', 'vinay',
//     'adarsh', 'paru',
//     'achu'
//   ]

// 7. indexOf()
let colours = ['blue', 'green', 'red', 'yellow']
let indexOfRed = colours.indexOf('red');
// console.log(indexOfRed);
// ans- 2

// 8. lastIndexOf()
let colors = ['blue', 'red', 'yellow', 'green', 'blue']
let lastindex = colors.lastIndexOf('blue');
// console.log(lastindex);
// ans-4

// 9. forEach()
let numbers = [1, 2, 3, 4, 5, 6]
// numbers.forEach((n) => {console.log(n * 2)})
// ans- 
// 2
// 4
// 6
// 8
// 10
// 12
let count = 0;
numbers.forEach((n) => count++)
// console.log(count);
// ans-6
// The forEach() method calls a function for each element in an array.
// The forEach() method is not executed for empty elements.


// 10. map()
let num = [2, 4, 6, 8, 10]
// let myFunc = (n) => {
//     return n * 2
// }
// let numDoubled = num.map(myFunc)

// let numDoubled = num.map((n) => n * 2)
// console.log(numDoubled)
// map() creates a new array from calling a function for every array element.
// map() does not execute the function for empty elements.
// map() does not change the original array.

// 11. pop()
let brands = ['nike', 'addidas', 'puma']
let pumaPop = brands.pop()
// console.log(pumaPop)
// ans - puma
// console.log(brands)
// ans- ['nike', 'addidas']
// The pop() method removes (pops) the last element of an array.
// The pop() method changes the original array.
// The pop() method returns the removed element.

// 12.push()
let fruitz = ['kiwi', 'apple', 'banana']
let pushFruitz = fruitz.push('grapes')
// console.log(fruitz)
// ans- [ 'kiwi', 'apple', 'banana', 'grapes' ]
// console.log(pushFruitz)
// ans- 4
// The push() method adds new items to the end of an array.
// The push() method changes the length of the array.
// The push() method returns the new length.

// 13.shift()
let rivers = ['ganga', 'yamuna', 'kaveri']
let shiftMethod = rivers.shift()
// console.log(shiftMethod)
// ans- ganga
// console.log(rivers)
// ans- [ 'yamuna', 'kaveri' ]
// The shift() method removes the first item of an array.
// The shift() method changes the original array.
// The shift() method returns the shifted element.

// 14. unshift()
let namez = ['vinay', 'paru']
namez.unshift('rudra')
// console.log(namez)
// [ 'rudra', 'vinay', 'paru' ]
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.