const salary = 250001;
const isBCS = true;
const height = 68;
// const hasCar = true;
const hasCar = false;
// if(salary > 2000 && height > 66){
//     console.log('su_________patro');
// }
// else{
//     console.log('onno patro khuji');
// }

/*
if(salary > 25000 || height > 72){
    console.log('eso baba kobul');
}
else{
    console.log('nam ki to tor');
}
*/



// more and more condition:
//  if(salary > 25000 || height > 72 || isBCS == true){
//     console.log('eso baba kobul');
//  }
//  else{
//     console.log('vag tui mokbul');
//  }


 if(salary > 25000 && height > 72 && isBCS == true){
    console.log('eso baba kobul');
 }
 else{
    console.log('vag tui mokbul');
 }
 

//  ----------------------COMPLEX CONDITION----------------------
if((salary > 25000 && hasCar == true) || isBCS == true){
    console.log('tomar 14 ghosti raji');
}
