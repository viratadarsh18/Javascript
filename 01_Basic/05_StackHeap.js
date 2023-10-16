//STack And Heap Memory

//Primitive type data uses stack memory
//Non Primitive uses heap memory
// When a stack memory is created then a copy of variable is created. 
// And when heap memory is created then the refrence of the variable is created. and if we change variable value then the original value will change.

let myname = "Adarsh"
 let mynewname = myname 
mynewname = "Virat"
console.log(mynewname);
console.log(myname);
// value will be changed for the new variable only. it is the nature of the primitive data types 

let myobj = {
    name : "Raj",
    email : "adrshrai@gmail.com"
}
let mynewobj = myobj
mynewobj.email="rajrai@gmail.com"
console.log(myobj)
console.log(mynewobj)
// Value will be chnaged for both the vaiables. this is the nature of the no primitive data types. 
