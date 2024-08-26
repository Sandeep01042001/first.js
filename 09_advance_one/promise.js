const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Hello Sandeep!")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log('resolve confirmed');
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("jsvsscript learning")
        resolve()
    },1000)
}).then(function(){
    console.log('resolve js confirmed');
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username:"Sandeep2001", password:"123"})
    },1000)
    
});
promiseThree.then(function(user){
    console.log(user);
    console.log(user.username);
    
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:"sandeep121", password:"121"})
        } else{
            reject('Error is Activeted')
        }
    },1000)
});
promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=> {
    console.log(username)
}).catch(function(error){
    console.log(error);
    
}).finally(function(){
    console.log('This is code activeted ');
    
})


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({username:"SAND2001", password:"1241"})
        } else{
            reject("Error: error is find")
        }
    },1000)
});
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
        console.log(response.username);
        console.log(response.password);
        
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFive()


async function getAllUsers(){
     try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await responce.JSON();
        console.log(data);
        
     } catch (error) {
        console.log('Error is find');
        
     }
}
getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
   return  console.log(data);
      console.log(data.id);
      

})
.catch((error)=> {console.log("its Error");
})