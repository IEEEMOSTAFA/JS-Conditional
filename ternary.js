/*
TERNARY ---> three parts

condition ? do something when true : do something when false
*/
/*
const age = 20;
if(age >= 18){
    console.log('You can vote.')
}
else{
    console.log('Ghumai thako')
}
*/

// --> use ternary operator:
/*
// simple ternary
const age = 21;
age >= 18 ? console.log('Vote Dio') : console.log('Ghumai thako')
*/
//  let : changeable
let price = 500;
const isLeader = true;
if (isLeader == true) {
    price = 0;
}
else {
    price = price + 100;
}
// console.log(price)
// use ternary
price = isLeader === true ? 0 : price + 100;


// Optional : semi-advanced ternary

if (isLeader === true) {
    if (price > 1000) {
        price = price / 2;
    }
    else {
        price = 0;
    }
}
else {
    price = price + 1000;
}

price > 1000 ?
    // feel free to ignore this price:
    // price = isLeader === true ? 0 : price + 1000;
    // price = isLeader === true ? price > 1000 ? price /2 : 0 : price + 1000;
    price = isLeader === true ?
        price > 1000 ?
            price / 2 : 0
        : price + 1000;