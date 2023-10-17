const Array = [1,2,3,4,5,6]
//console.log(Array[4])
//When we try to print the outof scope value then it will print the undefined. 

//Array Methods
// Array.push(7)
// Array.pop()
// Array.unshift(0)
// Array.shift(5)
//  console.log(Array.includes(5))
//  console.log(Array.indexOf(4))
 //const newArr = [9,8,7]
 const newArr = Array.join()
//  console.log(newArr);
//  console.log(Array);

 //Join will add all the elements of the array into string and it will also change the type of data to String. 

 const num = [1,2,3,4,5]
//  console.log("A ", num);
 const numb = num.slice(1,3)
//  console.log(numb);
//  console.log("B ",num);
 const number = num.splice(1,3)
//  console.log(number)
//  console.log("C ", num);

const marvel = ["Ironman", "Thor", "Spiderman"]
const dc = ["Superman", "Batman", "flash"]
//marvel.push(dc);
//console.log(marvel); // this will add dc array as an array in marvel aaray. because array can accept any types of data either it is array

const all = marvel.concat(dc) //concat method
// console.log(all);

const allnew = [...marvel, ...dc] //spread method
// console.log(allnew)

const age = [1,2,3,4,[5,6,[7,8],9]]
const new_age = age.flat(Infinity) //This will take all the elements of the subarray into a main array.
console.log(new_age)

//Suppose we are taking some values from other place and we want to check it whether it is an array or not, and we can also change it into array. 
// console.log(Array.isArray("Raj"))
console.log(Array.from("Raj"))