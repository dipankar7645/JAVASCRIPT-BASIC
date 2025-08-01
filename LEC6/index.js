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
//     // val += 5
//      val *= 5
//     return val
// })
// console.log(newArr)

// let arr = [5,6,7,8,4,6]
// const newArr = arr.map((val) => val += 5)
// console.log(newArr)

// let arr = [3,4,44,36,84,93]
// const newArr = arr.filter((val) => {
//     if(val < 44){
//         return true
//     }
// })
// console.log(newArr)

// let arr = [54,66,76,87,88,94]
// const newArr = arr.filter((val) => val > 66)
// console.log(newArr)


// let arr = [3,4,5,6]
// let sum = 0;
// for(let i=0; i<arr.length; i++){
//     sum += arr[i]  // sum = sum + arr[i]
//     // sum = sum + arr[i] --> 0 + 3 = 3
//     // sum = sum + arr[i] --> 3 + 4 = 7
//     // sum = sum + arr[i] --> 7 + 5 = 12
//     // sum = sum + arr[i] --> 12 + 6 = 18
// }
// console.log(sum)


// let arr = [45,65,73,89,87]
// const newArr = arr.reduce((acc , cur) => {
//     acc = acc+cur
//     return acc
// }, 1)
// console.log(newArr)

// let arr = [34,45,64,55]
// const newArr = arr.reduce((acc , cur) => acc += cur , 0)
// console.log(newArr)

let student = [
    {name : "Dipankar" , courese : "MCA" , branch : "CA"},
    {name : "Rahul" , courese : "B.tech" , branch : "CSE"},
    {name : "sonu" , courese : "B.tech" , branch : "Civil"},
    {name : "jai" , courese : "MCA" , branch : "CA"},
    {name : "prabhakar" , courese : "Bca" , branch : "CA"},
    {name : "ram" , courese : "B.tech" , branch : "mechanical"},
];

// const newArr = student.filter((val) => {
//     console.log(val)
// })

// const newArr = student.filter((val) => {
//     return val
// })
// console.log(newArr)

// const newArr = student.filter((val) => {
//     if(val.courese === 'B.tech'){
//         return val
//     }
// })
// console.log(newArr)

// const newArr = student.filter((val) => val.courese === 'Bca')
// console.log(newArr)

// const newArr = student.filter((val) => {
//     let fullname = ''
//     if(val.branch === 'CA'){
//         fullname += val.name
//         console.log(fullname)
//         return val
//     }
// })
// console.log(newArr)

const newArr = student.filter((val) => {
    if(val.courese === 'B.tech'){
        return val
    }
}).map((val) => val.name)
console.log(newArr)