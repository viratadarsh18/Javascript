//object can be declared in two ways 1. literals 2. Constructor
// if we create an object using constructor(Object.create) then a "Singleton Object " will be created. But not in the case of the literals

//  declare Symbol
const sym = Symbol("key1")
//object literals
const JsUser = {
    name: "Adarsh",
    age : 23,
    Location : "Pune",
    email : "adarsh@gmail.com",
    "my day"  : "Monday",
    [sym] : "mykey1" // this  is the way use can add symbol into object key. and how we should add this using [].
}
//Object can be accessed by these two methods
// console.log(JsUser.email) //1st way
// console.log(JsUser["age"]) //2nd way // here we have to give the elements of array in string because we had not specifies it in object declaration.
//console.log(JsUser["my day"])

// console.log(sym);
// console.log(typeof(sym));
// console.log(JsUser[sym]);

JsUser.email = "adarshrai@gmail.com"
//Object.freeze(JsUser) //no one can change after this
JsUser.email = "rajrai@gmail.com"
// console.log(JsUser)

//Function
JsUser.greeting = function(){
    console.log("Hello Js User")
}

JsUser.greetingtwo = function(){
    console.log(`Hello Js User, ${this.name}`)
}
console.log(JsUser.greeting())
console.log(JsUser.greetingtwo())