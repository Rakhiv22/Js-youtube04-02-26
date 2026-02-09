


function sayMyName(){
    console.log("R");
    console.log("a");
    console.log("k");
    console.log("h");
    console.log("i");
    }
    //sayMyName()

// function addTwoNumber(number1,number2){
//   console.log(number1+number2);
  
// }
function addTwoNumber(number1,number2){
//  let result = number1+number2
//  return result
  return number1+number2
}
const result = addTwoNumber(3,5)
//console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
  console.log("please enter user name");
   return
    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("Rakhi"));
//console.log(loginUserMessage("Rakhi"));

function calucateCartPrice(val1,val2,...num1){
    return num1

}
console.log(calucateCartPrice(200,400,500,600,700));

const user ={
    username : "Rakhi",
    price : 199,


}
function handelObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handelObject(user)
handelObject({
    username : "sam",
    price : 399
})
const mynewArray = [200,400,100,600]
function returnSecoundValue(getArray){
  return getArray[1]
}
//console.log(returnSecoundValue(mynewArray));
console.log(returnSecoundValue([200,400,500,1000]));

