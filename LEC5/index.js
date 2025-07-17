// let arr = ['A', 'B', 'c', 'D']
// // console.log(arr[2]);
// // console.log(typeof (arr));
// console.log(arr);

// let language = ["Cpp","Java", "Python", "JavaScript", "C"]
// console.log(language [3]);

// let random = [1, "Hello", "sir", true, {name : "Dipankar"}, 2]
// // console.log(random)
// console.log( (typeof random[3]))


// let arr = [5,7,9,4,7,6]
// arr.push(90)
// arr.push([22,44,66,89])

// arr.pop()

// let newArr = arr.concat(67,80,90,76)

// let newArr = arr.indexOf(4)

// let newArr = arr.join("-")

// console.log(arr.length)

// console.log(arr.reverse());

// arr.shift()
// arr.unshift(99,78,90)

// let arr = [5,7,9,4,7,6]
// let newArr = arr.slice(2,5)
// console.log(arr)
// console.log(newArr);

// let arr = [5,7,9,4,7,6]
// let newArr = arr.splice(2,5)
// console.log(arr)
// console.log(newArr);


// let arr = [45,55,32,23,11,48,95]
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i])
// }

// let arr = [45,33,57,85,94,67,31,12]
// let [one, two, three, four, five, six, seven, eight] = arr
// console.log(three)

// OBJECT 

// const obj = {
//     name : "Dipnkar",
//     id : 23432,
//     course : "MCA",
//     Branch : "Computer Application",
//     Hosteller : false
// }
// console.log(obj)
// console.log(obj["name"])
// console.log(obj.id)

// const obj2 = {
//     name : "Rahul",
//     id : 23452,
//     course : "BCA",
//     Branch : "Computer Application",
//     Hosteller : true
// }

// const student = [
// {
//     name : "Dipnkar",
//     id : 23432,
//     course : "MCA",
//     Branch : "Computer Application",
//     Hosteller : false
// },
// {
//     name : "Rahul",
//     id : 23452,
//     course : "BCA",
//     Branch : "Computer Application",
//     Hosteller : true
// },
// ];
// console.log(student)
// console.log(student[1].name)

// const obj = {
//     name : "Dipnkar",
//     id : 23432,
//     course : "MCA",
//     Branch : "Computer Application",
//     Hosteller : false
// }

// let arr = [11,34,32,56,98,68]

// for(let val of arr){
//     console.log(val)
// }

// for(let val in arr){
//     console.log(val)
// }

// for(let val in arr){
//     console.log(arr[val])
// }

// for(let val in obj){
//     console.log(val)
// }

// for(let val in obj){
//     console.log(obj[val])
// }

// for(const val of Object.keys(obj)){
//     console.log(val)
// }

// for(const val of Object.values(obj)){
//     console.log(val)
// }

// let str = "Hello"
// console.log(`${str} ji`)

// spread & rest

// let arr = [12,56,35,78,52]
// let arr2 = [45,98,90,70,57]

// let newArr = arr.concat(arr2)
// console.log(newArr)

// let newArr = [...arr , ...arr2]
// console.log(newArr)


// Destructhing

const obj = {
    name : "Dipnkar",
    id : 23432,
    course : "MCA",
    Branch : "Computer Application",
    Hosteller : false
}

// const {name, id, course, Branch, Hosteller} = obj
// console.log(Branch)

const {name, id, course, ...hello} = obj
console.log(hello)