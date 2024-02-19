const age = 51;
const price = 500;
if(age < 12){
    console.log('You can eat for free');
}
else if (age >= 60){
    // 50%
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);

}
else if(age >=50){
    // 40% discount
    const discount = price * 40 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
}
else if ( age >=40 && age < 50){
    //25% discount
    const discount = price * 25 /100;
    const payAmount = price - discount;
    console.log(payAmount);
}

else{
    console.log(price);
}