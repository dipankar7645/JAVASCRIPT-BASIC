// let age = 17;
// let check = age >= 11;
// console.log(check);

// if(check >= 18){
//     console.log("you are eligible for vote");   
// }else{
//     console.log("you are not eligible for vote");   
// }

// let a = 5;
// if(false){ // false
//     console.log("hii");  
// }else{
//     console.log("Hello");
// }

// let age = 45;
// let age = prompt("Enter your age: ");
// if(age <= 15){
//     alert("chhota bacha");
//     console.log("chhota bacha");
// }else if(age >= 16 && age <= 25){
//     console.log("medium bacha");   
// }else if(age >= 26 && age <= 35){
//     console.log("bada bacha");
// }else{
//     console.log("free");
// }


// let expression = '-'
// const num1 = 10;
// const num2 = 20;

// switch(expression){
//     case '+' : console.log(num1 + num2);
//                 break;
//     case '-' : console.log(num1 - num2);
//                 break;
//     default : console.log("choose correct");
// }

// let num1 = 4;
// let num2 = '4';
// if(num1 == num2 && typeof(num1) === typeof(num2)){
//     console.log(true);
// }else{
//     console.log(false);
// }

// for(let i=0; i<=5; i++){
//     console.log(i);
// }

// for(let i = 1; i<=10; i++){
//     console.log(i*6); 
// }

// let i =1;
// while(i<=10){
//     console.log(i*8);
//     i++
// }

// let i = 1;
// do{
//     console.log(i*5);
//     i++
// }while(i<=10)

// Tarnary operator

// console.log(11 > 9 ? "true" : "false");

// for( let i=0; i<=10; i++){
//     console.log(i);
//     if(i==4){
//         break;
//     }
//     // console.log(i);
// }

// for(let i=0; i<=10; i++){
//     console.log(i);
//     if(i == 3){
//         continue
//     }
//     // console.log(i);   
// }

for(let i=0; i<= 5; i++){
    str = ""
    for(let j = 0; j<=i ; j++){
        str += '*'
    }
    console.log(str);
    
}