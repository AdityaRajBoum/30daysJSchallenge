//task - 1
function evenOdd(N){
    if(N % 2 === 0){
        console.log("Even");
    }else{
        console.log("Odd");
    }   
}
evenOdd(5)

// task - 2
function square(n){
    return n*n;
}
console.log(square(5));

//task - 3
const MaxOfTwo = (n1, n2)=>{
    if(n1 > n2) console.log(n1);
    else console.log(n2);
}
MaxOfTwo(4,7)

// task - 4
const concatinate = (str1 , str2)=>{
    return str1.concat( str2);
}
console.log(concatinate('chai aur ', 'code'));

//task - 5
const sum = (a,b)=>{
    console.log(a + b);
}
sum(5,10);

//task - 6
const HasChar = (str, char)=>{
   if(str.indexOf(char)>= 0 ) return true;
   else return false;
}
console.log(HasChar('aditya', 'a'));

//task - 7
const product = (a, b =1)=>{
    console.log(a*b);
}
product(5, 4);

//task - 8

function message(name,  age){
        if(age>=18){
            console.log(`Hey ${name} welcome to the party`);
        }else{
            console.log(`Hey ${name} welcome to the party kid`);
        }
}
message('aditya', 21);

//task - 9
const Print = ()=>{
    console.log('Chai Code is OP')
}
const callFunction = (Print , number)=>{
    let i =0;
    while( i<number){
        Print();
        i++;
    }
}
callFunction(Print, 5);

//task -10
const Print2 = (func)=>{
    console.log(func)
}
 const higherOrder = (square , Print2, n)=>{
     Print2(square(n));

 }
 higherOrder(square, Print2, 5);
