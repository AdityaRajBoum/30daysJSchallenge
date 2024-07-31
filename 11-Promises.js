//task - 1

let promise  = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 2000);
})
promise.then((message) => console.log(message))

//task - 2

let promise2 = new Promise((reject) => {
    setTimeout(() => {
        reject('Rejected');    
    }, 2000);
})

promise2.catch((err) => console.log(`Promise rejected with error : ${err}`))

// task - 3
 
const fetchData = (data) => {
     return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })
}

fetchData("hero").then(() =>{ 
    console.log("hero")
    return fetchData("aditya")
}).then(() => {
    console.log("aditya")
    return fetchData("raj")
}).then(() => {
    console.log("raj")
    return fetchData("boum")
}).then(() => console.log("boum"))
.catch((err)=> console.log(err))


//task - 4

const newpromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise Resolved');
    }, 500);
})
const getdata = async() => {
    await newpromise.then((message) => console.log(message))
}
getdata();

//task - 5
const promise3 = new Promise((reject) => {
    setTimeout(() => {
        reject('Rejected');    
    }, 2000);
})  

const getdata3 = async() => {
    try{
        await promise3.then((message) => console.log(message))   
    } catch(err) {
        console.log(`Promise rejected with error : ${err}`)
    }
}
getdata3();


//task - 6
let apiUrl = "https://jsonplaceholder.typicode.com/posts/1"

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

    //task - 7

    let apiUrl2 = "https://jsonplaceholder.typicode.com/posts/1"

    const getdata2 = async() => {
        try{
            const response = await fetch(apiUrl2)
            const data = await response.json()
            console.log(data)
        } catch(err) {
            console.log(`Promise rejected with error : ${err}`)
        }
    }
    getdata2();

//task - 8

Promise.all([promise, promise2]).then(
    (message) => console.log(message)
).catch((err)=> console.log(err));

//task - 9
Promise.race([promise, promise2]).then(
    (message) => console.log(message)
)
