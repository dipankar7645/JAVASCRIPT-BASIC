// function sum(...num){   // ...rest operator
//     // console.log(num[1])
//     let add = num[0] + num[1] + num[2]
//     console.log(add)
//     // let total = a + b + c
//     // console.log(total)
// }
// sum(3,6,2)

// let obj = {
//     name : "Rahul,sonu,jai,pra",
//     address : "Patna",
//     live : "Noida"
// }

// function obj1({name,address,live}){
//     // console.log(obj) //()
//     // console.log(hello)  //(...hello)
//     // console.log(live) //(name,address,live)
//     let namearr = name.split(",")
//     console.log(namearr)
// }
// obj1(obj)

// let {name , address , live} = obj/
// let {name , ...reamining} = obj
// console.log(reamining)


// let arr = [3,66,8,6,90,89,93]
// let arr2 = [7,8,4,6,3,6,1,9,4]
// let newArr = [...arr , ...arr2] //spread operatot
// console.log(newArr)


// let arr = [4,2,5,,48,9,45,28]
// arr.forEach(function(val){
//     console.log(val)
// })

// let arr = [4,2,5,,48,9,45,28]
// const newArr = arr.forEach(function(number,index){
//      console.log(`Element at ${index} : ${number}`)
//     // val += 5
//     // console.log(val)
// })


// let arr = [4,6,3,7,2,8,3,9,6]
// const hello = () => {
//     console.log(arr)
// }
// hello(arr)


// let arr = [4,5,6,78,9]
// const newArr = arr.map(function(val){
//     // console.log(val)
//     val += 5
//     return val
// })
// console.log(newArr)

// let arr = [5,6,7,8,4,6]
// const newArr = arr.map((val) => val += 5)
// console.log(newArr)


console.log("hello")