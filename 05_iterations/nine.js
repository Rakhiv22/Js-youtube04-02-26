const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currval : ${currval}`);
    
//     return acc + currval
// }, 0) 
 const myTotal = myNums.reduce( (acc,currval) => acc+currval, 0)
 console.log(myNums);
 
//console.log(myTotal);

const shoppingCart = [
    {
        itemName : "js Course",
        price : 999
    },
      {
        itemName : "py Course",
        price : 1299
    },
     {
        itemName : "pc Course",
        price : 13999
    },
    {
        itemName : "mobile Course",
        price : 17999
    }

]

const priceToPay = shoppingCart.reduce( (acc,item) =>acc+ item.price ,0)
console.log(priceToPay);

