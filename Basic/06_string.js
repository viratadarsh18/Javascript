const name  = "Adarsh"
const age = 24
//console.log(name + age) //this is not redable and it make program less attractive. intead of this we can use below syntax.

console.log(`Hi, My name is ${name} and my age is ${age}.`);

// we can also declare string by using object
const game = new String("GTA")
console.log(game.length)
console.log(game.toLowerCase());
console.log(game.charAt(2))
console.log(game.indexOf('A'));
console.log(game.substring(0, 2))


const newstring = "    Adarsh    "
console.log(newstring.trim());
console.log(newstring.replace('a', 'M'))
console.log(newstring.includes('O'));
console.log(newstring.split(' ', 5))