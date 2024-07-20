//task - 1
let name = 'aditya';
let age = 21;
console.log(`My name is ${name} and my age is ${age}`)

//task - 2
const multilinestring = `My name is ${name} and
my age is ${age}`
console.log(multilinestring)

//task - 3
const arr = [1,2,3,4,5];
const [one , two] = arr
console.log(one,two)

//task - 4
const obj = {
    objname : 'aditya',
    objage : 21
}
const {objname , objage} = obj
console.log(objname,objage)

//task - 5
const arr2 = [...arr , 6,7,8];
console.log(arr2)

//task - 6
const sumNumbers = (...numbers)=>{
    let sum =0;
        sum += numbers
        return sum;
}
console.log(sumNumbers(1,2,3,4,5))

//task - 7
const multiply = (a, b=1)=>{
    return a*b;
}
console.log(multiply(2,2))
console.log(multiply(2))

//task - 8
const enhacedObj = {...obj ,
     objname : 'aditya raj boum'
    }
console.log(enhacedObj)

//task - 9
let property1 = "colour"
let property2 = "size"
let property3 = "material"

const obj2 = {
    [property1] : "red",
    [property2] : "large",
    [property3] : "aluminium"
}
console.log(obj2)