// const name ="rakhi"
// const name =  40
//console.log(name + repoCount +"value");
//console.log(`Hello my name is ${name} and my repo count ${name}`);

const gameName =  new String('rakhi-verma-com')
// console.log(gameName[0]);
//  console.log(gameName.__proto__)
//  console.log(gameName.length);
//   console.log(gameName.toUpperCase());
//     console.log(gameName.charAt(4));
//      console.log(gameName.indexOf('v'));


const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="      rakhi   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://rakhi.com/hitesh%20rakhi"
console.log(url.replace('%20','-'));
console.log(url.includes('rakhi'));
console.log(gameName.split('-'));















