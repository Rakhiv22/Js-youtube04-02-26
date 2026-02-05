// primitive 
 // 7 types : string,number,boolearn,null,undefined,symbol,BigInt,

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmmail = null
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
const bigNumber =  4342432324334n
 //Reference(Nonprimitive)
 // array,Objects,functions

 const heros = ["shaktiman","naagraj","doga"];
 let myObj = {
    name: "Rakhi",
    age : 22
 }
 const myfunction = function(){
   console.log("hello world");
   
 }
 console.log(typeof anotherId);


 //stack(Primitive),Heap(Non-primitive)

let myYoutubename = "happyyoutube"
let anothername = myYoutubename
anothername = "chaiaurcode"
// console.log(myYoutubename);
// console.log(anothername);

let userOne ={
  email:"user@google.com",
  upi : "user@upi"
}
let userTwo = userOne
userTwo.email = "rakhi@google.com"
console.log(userOne.email);
console.log(userTwo.email);



 
