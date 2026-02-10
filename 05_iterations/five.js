const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function (val){
//   console.log(val);
  
// })   
// coding.forEach( (item) => {
//   console.log(item);
  
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item,intex,arr) => {
//     console.log(item,intex,arr);
    
// })

const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
     {
        languageName : "java",
        languageFileName : "java"
    },
     {
        languageName : "python",
        languageFileName : "pc"
    }
]
myCoding.forEach( (item) =>{
  console.log(item.languageFileName);
  
})