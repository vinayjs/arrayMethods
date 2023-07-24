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