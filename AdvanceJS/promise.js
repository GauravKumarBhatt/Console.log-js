console.log('Promise in JavaScript!')

// Promise first

const PromiseOne = new Promise(function(resolve, reject){
    //do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

PromiseOne.then(function(){
    console.log("Promise Consumed");
})

// promise two

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})

console.log()

// promise  three
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        setTimeout(function(){
            resolve({username: "JavaScript", email: "js@google.com"})
        })
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

// promise Fourth

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Gaurav", Password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
        
    }, 1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(() => console.log("The Promise is either resolved or rejected"))


// Promise five

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Gaurav", Password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
        
    }, 1000)
});

async function consumePromiseFive() {
   try {
     const response = await promiseFive
    console.log(response);
   } catch (error){
    console.log(error);
   }
}

consumePromiseFive()



// promise include api's
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://api.github.com/users/GauravKumarBhatt')
//     const data = await response.json()
//     console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// fetch feature
 fetch('https://api.github.com/users/GauravKumarBhatt')
 .then((response) => {
    return response.json()
 })
 .then((data) => {
    console.log(data);
 })
 .catch((error) => console.log(error))