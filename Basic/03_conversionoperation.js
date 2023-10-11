//let score = "10abc"
//let score = null
//let score = undefined
let score = false
//let score = "raj" 
console.log(typeof score)
console.log(typeof (score))

let newscore = Number(score)
console.log(typeof newscore)
console.log(newscore)


//After COnversion
//"33"=>33 and datatype is number
//"33abc=>NaN(Not a number) and datatype is number
//false => 0 and datatype is number

let yes = -2
console.log(typeof yes);
let newyes = Boolean(yes)
console.log(typeof newyes);
console.log(newyes);

//In Boolean
//1=>true and 0=> false
//2 or any  other value true either it is string
//"" => false

let num = null
let newnum = String(num)
console.log(newnum);
console.log(typeof newnum)

//In String
//33=> 33 dataype after converion will be String
//null => null
//true => true
//undefined => undefined

