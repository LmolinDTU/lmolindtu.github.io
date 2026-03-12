console.log("we sell outdoor gear");
let age = 30
console.log(age);
// i am a single line comment in javascript

function calculateTotal(price)
{let vat = 0.25;
return price + price * vat;    
}
let total = calculateTotal(200);
console.log(total);

function sayHello(){
alert("hello!");    
}
sayHello();

function calculateDiscount(price, isMember) {
// 20% discount for members
if (isMember) {
    return price * 0.8;
  } else {
    return price;
  }
}

console.log(calculateDiscount(100, true));

function double(number){
return number*2;    
}

function addTen(number){
    return number + 10;
}

function processNumber(x){
    return addTen(double(x));
}
console.log(processNumber(5));

let price =100;
let isMember = true
console.log(price);
console.log(isMember);


