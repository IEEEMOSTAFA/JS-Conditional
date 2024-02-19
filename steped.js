/* 
*multilevel condition:


*/
// const price = 5000;
// const price = 10000;
const price = 4000;
if(price >= 5000){
    // 10% discount
    const discount = price*10  / 100;
    console.log(discount);
    const payAmount = price - discount;
    console.log(payAmount);
}
else if(price > 25000)
{
    // 5% discount
    const discount = price * 5 /100;
    const payAmount = price -discount;
}
else{
    console.log(price);
}