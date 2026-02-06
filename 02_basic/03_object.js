//singleton
//object literals
const mySym = Symbol("key1")
const jsUser = {

    name: "Rakhi",
    "full name" : "Rakhi Verma",
    [mySym] : "mykey1",
    age : 18,
    location : "Ranchi",
    email : "rakhi@gmail.com",
    isLoggedIn : false,
    lastLoginDay : ["mondaya","saturtday"]
}

// console.log(jsUser.email)
// console.log(jsUser["full name"])
// console.log(jsUser["email"])
//console.log(jsUser[mySym])
jsUser.email = "rakhi@chatgtp.com"
//Object.freeze(jsUser)
jsUser.email = "rakhi@microsoft.com"
// console.log(jsUser)

jsUser.greeting =  function(){
    console.log("hello js user");
    
}
console.log(jsUser.greeting);

jsUser.greetingTwo =  function(){
    console.log(`hello js user,${this.name}`);
    
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
