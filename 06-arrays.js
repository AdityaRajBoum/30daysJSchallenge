//Task - 1
let arr = [1,2,3,4,5];
console.log(arr);
//Task - 2
console.log(arr[0]);
console.log(arr[4]);

//Task - 3
arr.push(6);
console.log(arr);
//Task - 4
arr.pop();
console.log(arr);
//Task - 5
arr.unshift(0);
console.log(arr);
//Task - 6
arr.shift();
console.log(arr);

//Task - 7
const new_arr = arr.map((x)=>2*x);
console.log(new_arr);

//task - 8
const even_arr = arr.filter((e)=>e%2==0);
console.log(even_arr);

//Task - 9
const initialValue = 0;
const reduced_arr = arr.reduce((accumulator, currentValue)=>accumulator+currentValue);
console.log(reduced_arr);

//task - 10
const print = ()=>{
    for(let i =0; i< arr.length; i++){
        console.log(arr[i]);
    }
}

//task - 11
const print2 = ()=>{
    array.forEach(element => console.log(element));
}

//task - 12
const twoDimensionalArray = [[1,2,3],
                            [4,5,6],
                            [7,8,9]]

console.log(twoDimensionalArray);
twoDimensionalArray.forEach(e=>e.forEach(e=>console.log(e)));
console.log(twoDimensionalArray[2][1]);



