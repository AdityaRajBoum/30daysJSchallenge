//task-1
const add = (a,b )=>{
    return a+b ;
}
console.log(add(1,2));


//task-2
const substract = (a,b)=>{
    return a-b;
}
console.log(substract(1,2));

//task-3
const multiply = (a,b)=>{
    return a*b;
}
console.log(multiply(1,2));

//task-4
const divide = (a,b)=>{
    return a/b;
}
console.log(divide(1,2));

//task-5
const remainder = (a,b)=>{
    return a%b;
}
console.log(remainder(1,2));

//task-6
const adds =  ( a,b)=>{
    a +=b ;
    return a
}
console.log(adds(1,2));

//task-7
const subs = (a,b)=>{
    a -=b ;
    return a
}
console.log(subs(1,2));


//task-8
const smaller = (a,b,c)=>{
    if(a>b && b<c) return b;
    else return 0;
}
console.log(smaller(2,1,3))

//task-9
const larger = (a,b,c)=>{
    if(a<=b && b>=c) return b;
}
console.log(larger(1,2,2))
 
//task-10
const equalsAnd = (a,b)=>{
    if(a===b && a==b) return true;
    else return false;
}
console.log(equalsAnd(1,"1"))

//task-11
const equalOr = (a,b)=>{
    if(a===b || a==b) return true;
    else return false;
}
console.log(equalOr(1,"1"))

//task-12
const equalNot = (a,b)=>{
    if(a!==b || a!=b) return true;
    else return false;
}
console.log(equalNot(1,"1"))