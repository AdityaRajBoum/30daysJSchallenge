//Task - 1
const throwError = () =>{
    throw new Error('Error');
}
    try {
        throwError();
    }
    catch(err){
        console.log(`Exited With ${err}`)
    }


//task - 2
const divide = (a,b)=>{
    if(b===0) throw new Error('Cannot divide by zero');  
    return a/b;
}
try {
   const result = divide(1,0);
   console.log(result);
}
catch(err){
    console.log(`Exited With ${err}`)
}

//Task - 4
class CustomError extends Error {
    constructor(message) {
      super(message); 
      this.name = this.constructor.name;
      this.timestamp = new Date(); 
    }
  }
  
  try {
    throw new CustomError('This is a custom error message');
  } catch (error) {
    console.log(error.name); 
    console.log(error.message); 
    console.log(error.timestamp); 
    console.log(error.stack); 
  }
  
//Task - 5
const Validation = ( value ) => {
    if (value === "") {
        throw new Error("Value cannot be empty");
    }
    return value;
}
try { 
    const result = Validation("");
    console.log(result);
}catch(err){
    console.log(`${err}`)
}

//Task - 6
let random = Math.floor(Math.random() * 10) + 1;
const promise = new Promise((resolve, reject) => {

    if(random > 5){
      resolve("Promise Resolved");
    }
   reject("Promise Rejected");
})

promise
    .then((message) => console.log(message))
    .catch((err) => console.log(err))


//Task - 7
async ()=>{
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(`Promise rejected with error : ${err}`)
    }
}

//Task - 8
let apiUrl = "https://jsonplaceholder.typicode.com/posts/pro/file/1"

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json() 
    })
    .then(data => {
        console.log(data) 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })

//Task - 9

async ()=>{
    try{
        const response = await fetch(apiUrl)
        const data = await response.json()
        console.log(data)
    } catch(err) {
        console.log(`Promise rejected with error : ${err}`)
    }
}