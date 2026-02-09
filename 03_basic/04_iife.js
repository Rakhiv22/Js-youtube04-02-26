//Immediately Invoked function Expressions(IIFE)

(function one(){
    //named iife
    console.log(`DB Connected`);
    
})();

( (name) => {
  console.log(`DB Connected Two ${name}`);
  
})('Rakhi')
