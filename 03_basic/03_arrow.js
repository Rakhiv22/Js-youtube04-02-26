const user = {
    username : "Rakhi",
    price :999,
    

    welcomeMessage: function(){
        //console.log(`${this.username},welcome to website`);
        //console.log(this);
        
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);

// function one(){
//     let username = "Rakhi"
//     console.log(this.username);
    
// }
// one()
// const one  = function(){
//     let username = "Rakhi"
//     console.log(this.username);
    
// }
// one()

const one  = () => {
    let username = "Rakhi"
    console.log(this);
    
}
//one()

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }


//const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => (num1+num2)

const addTwo = (num1,num2) => ({username:"Rakhi"})

console.log(addTwo(3,4));

const myArray  = [2,3,5,6,7]

