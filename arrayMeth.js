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
let newValue  = namez.unshift('rudra')
// console.log(newValue)
// ans- 3
// console.log(namez)
// [ 'rudra', 'vinay', 'paru' ]
// The unshift() method adds new elements to the beginning of an array.
// The unshift() method overwrites the original array.
// returns  the new length of the array

// 15. reverse()
let values = [1, 2, 3, 4, 5]
values.reverse()
// console.log(values)
// [ 5, 4, 3, 2, 1 ]
// The reverse() method reverses the order of the elements in an array.
// The reverse() method overwrites the original array.

// 16. filter()
let age = [22, 32, 43, 54]
let ageFilter = (n) => {
    return n <= 50
}
let ages = age.filter(ageFilter)
// console.log(ages)
// [ 22, 32, 43 ]
// The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// 17.at()
let bikes = ['pulsar', 'avenger', 'ktm', 'R15']
let index = 2
let atIndex = bikes.at(index)
// console.log(atIndex);
// let atAlternate = bikes[1];
// console.log(atAlternate);
//The at() method returns an indexed element from an array.

// 18.copyWithin()
let languages = ['js', 'python', 'ruby', 'java', 'c', 'c+']
let copyLang = languages.copyWithin(0, 1)
// console.log(copyLang)
// ans- [ 'python', 'ruby', 'java', 'c', 'c+', 'c+' ]
// The copyWithin() method copies array elements to another position in the array.
// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.

// 19.find()
let digits = [22, 25, 26, 33, 35, 40]
let above30 = (digit) => {
    return digit > 30
};
let result = digits.find(above30);
// console.log(result);
// The find() method returns the value of the first element that passes a test.
// The find() method executes a function for each array element.
// The find() method returns undefined if no elements are found.
// The find() method does not execute the function for empty elements.
// The find() method does not change the original array.

// 20.includes()
let carz = ['bmw', 'audi', 'ferrari', 'bently']
let findCarz = cars.includes('audi')
// console.log(findCarz)
// The includes() method returns true if an array contains a specified value.
// The includes() method returns false if the value is not found.
// The includes() method is case sensitive.

// 21.length()
let numberz = [23, 22, 25, 26, 28, 29]
let numLength = numberz.length
// console.log(numLength)
//The length property sets or returns the number of elements in an array.

// 22.Array.isArray()
let array1 = [1, 2, 3, 4]
// console.log(Array.isArray(array1))
// ans- true
let number = 23
// console.log(Array.isArray(number))
// ans- false

// 23. sort()
let xyz = ["a", "c", "b", "e", "f"]
// console.log(xyz.sort())
// ans- [ 'a', 'b', 'c', 'e', 'f' ]
let numberSort = [3, 6, 1, 2, 5, 4]
// console.log(numberSort.sort())
// ans - [ 1, 2, 3, 4, 5, 6 ]

// 24 . reverse()
let getReversed = [ 1, 2, 3, 4, 5, 6 ]
// console.log(getReversed.reverse())
// ans - [ 6, 5, 4, 3, 2, 1 ]
let getReversed2 = [ 'a', 'b', 'c', 'd', 'e', 'f' ]
// console.log(getReversed2.reverse())
// ans- [ 'f', 'e', 'd', 'c', 'b', 'a' ]

// 25. every()
let values1 = [12, 22, 32, 23, 33, 43]
let myFunc = (a) => {
    return a > 15;
}
// console.log(values1.every(myFunc))
// ans- false
// The every() method checks if all array values pass a test.

// 26. some()
let values2 = [23, 45, 21, 56, 34, 66, 77]
let myFunction = (a) => {
    return a > 60 ;
}
// console.log(values2.some(myFunction))
// ans- true
//The some() method checks if some array values pass a test.

// 27. spread operator
let a = ['jan', 'feb', 'march']
let b = ['april', 'may', 'june']
let add = [...a, ...b]
// console.log(add);
// ans- [ 'jan', 'feb', 'march', 'april', 'may', 'june' ]