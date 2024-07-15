//task -1

const IntSignChecker = (n)=>{
        if(n>0) return "positive";
        else if (n<0) return "negative";
        else return 0;
}
console.log(IntSignChecker(-3));


//task - 2
const VoteEligibility = (age)=>{
    if(age<0 || age>130) return "Invalid";
   else if(age>=18) return "Eligible";
    else  return "Not Eligible";
}
console.log(VoteEligibility(79));


//task - 3

const LargestOfThree = (a,b,c)=>{
//     if(a>b && a>c) return a;
//     else if(b>a && c<b) return b;
//     else return c;

    if(a>b){
        if(a>c){
            return a;
        }
        return c;
    }
    return b;
}


console.log(LargestOfThree(4,2,8));

//task - 4

const DayOfWeek = (day)=>{
        switch(day){
            case 1: return "day";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Satday";
            case 7: return "Sunday";
            default : return "Invalid";
        }
}

console.log(DayOfWeek(5))


// task - 5

const Grade = (Marks)=>{
    switch(true)  {
        case (Marks>=90 && Marks<=100): return "A";
        case (Marks>=75 && Marks<90): return "B";
        case (Marks>=50 && Marks<75): return "C";
        case (Marks>=33 && Marks<50): return "D";
        case( Marks<33): return "F";
        default: return "Invalid";
    }
}

console.log(Grade(55))

//task - 6

const IsEvenOdd = (num)=>{
    num%2 == 0 ? console.log("Even") : console.log("Odd"); 
}

IsEvenOdd(5)

//task - 7

 const IsLeapYear = (y) =>{
    if(y%4==0 && y%100!=0 || y%400==0){
       console.log("Leap Year");  
    }
    
 }

 IsLeapYear(2020)