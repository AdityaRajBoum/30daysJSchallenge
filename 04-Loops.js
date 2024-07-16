//task -1

const printNumbers = (n)=>{
    for(let i = 0 ; i < n ; i++){
        console.log(i+1);
    }
}
printNumbers(10)

//task - 2
 const PrintTable = (n) =>{
    for(let i = 1 ; i <= 10 ; i++){
        console.log(n, '*', i ,'= ',  n*i);
    }
 }
 PrintTable(5)

 //task - 3

 const  SumofNum = (n)=>{
    let sum = 0, i=1;
    while( i<=n){
        sum += i;
        console.log(sum);
        i++;
    }
    return sum;
 }

 console.log(SumofNum(10));
 

 //task - 4

const printInvNumbers = (n)=>{
    let i = n;
    while( i > 0 ){
        console.log(i);
        i--;
    }
}
printInvNumbers(10)

//task - 5

const Print1toN = (n)=>{
    let i = 1;
    do {
        console.log(i);
        i++;
    } while (i <= n);
}
Print1toN(5);

//task - 6

const factorial = (n)=>{
    let i = 1, fact =1;
    do {
        fact = fact * i;
        i++;
    } while (i <= n);
    return fact;
}

console.log(factorial(5));

//task - 7

const traingle = (n) => {
    let str = ''
    for(let row = 0; row < n; row++){
        for(let col = 0; col < n ; col ++){
            if(col <= row){
                str += '* ';
            }
        }
        str += '\n';
    }
    console.log(str);
}

traingle(5);

//task - 8 & 9

const skip5stop7 = (n)=>{
    for(let i = 1 ; i <= n ; i++){
        if(i === 5 ) continue;
        if(i== 7) break;
        console.log(i);
    }
}

skip5stop7(10);