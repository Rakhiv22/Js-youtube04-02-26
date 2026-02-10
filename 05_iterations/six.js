//const coding = ["js","ruby","java","python","cpp"]

// const value = coding.forEach( (item) => {
//   //console.log(item);
//   return item
  
// })

// console.log(value);

 const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach((num) => {
//   if(num > 4){
//     newNums.push(num)
//   }
// })
// console.log(newNums);

const books = [
    {title: 'Book One', genre : 'fiction', pulish: 2004},
     {title: 'Book Two', genre : 'fiction', pulish: 1982},
      {title: 'Book Three', genre : 'history', pulish: 1982},
       {title: 'Book Four', genre : 'fiction', pulish: 2026},
        {title: 'Book Five', genre : 'history', pulish: 1982},
]

let userBooks =  books.filter( (bk) => bk.genre === 'history' )
 userBooks = books.filter( (bk) => { 
  return  bk.pulish >= 2000  && bk.genre === 'fiction'})
 console.log(userBooks);
 

