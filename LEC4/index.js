// const dip_hindi = 70
// const dip_english = 50
// const dip_math = 80
// const total = dip_english+dip_hindi+dip_math
// console.log("total marks", total);



// function totalsum(){
//     console.log("In Function");
// }
// totalsum();

// function totalsum(parameter){
//     console.log(parameter);
// }
// totalsum("argument");

// function totalsum(val1,val2,val3){
//     console.log(val1,val2,val3);
// }
// totalsum(5,5,9);

// function totalsum(val1,val2,val3){
//     let sum = val1+val2+val3
//     console.log(sum);
// }
// totalsum(5,5,9);
 
// function totalsum (english,hindi,math){
//     let sum = english+hindi+math
//     return sum;
// }
// // console.log(totalsum(50,70,90));
// let diptotal = totalsum(40,60,80)
// console.log("Dip", diptotal);

// Number

// let num = 2000;
// console.log(num);
// console.log(num.toFixed(3));
// console.log(num.toPrecision(9));

// let num = new Number(100)
// // console.log(typeof (num));
// // console.log(typeof(number));
// console.log(num);


//  String

// let str = "Hello"
// console.log(str);

// let str = new String("Hello")
// console.log(str);

// let str = "Hello JavaScript"
// console.log(str.replace("ll" ,"LL"));
// console.log(str.split(" "));
// console.log(str.length);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.match("Hello"));
// console.log(str.charAt("12"));


// MATH

// console.log(Math);
// console.log(Math.PI);
// console.log(Math.floor(4.78));
// console.log(Math.ceil(2.01));
// console.log(Math.max(3,33,45,60));
// console.log(Math.min(3,33,45,0));
// console.log(Math.round(3.5));
// console.log(Math.abs(-2));
// console.log(Math.random());

// let randomNumber = Math.random() * 10
// console.log(randomNumber);

// let min = 1;
// let max = 6;
// // let randomNumber = Math.floor(Math.random() * 10) + 1
// let randomNumber = Math.floor(Math.random() * (max - min + 1)) 
// console.log(randomNumber);


// DATE

// let date = Date()
// console.log(date);

// let date = new Date()
// console.log(date);

let date = new Date()
// console.log(date.getTime());
// console.log(Math.floor(date.getTime()/1000));
// console.log(date.toISOString());
console.log(date.toUTCString());

