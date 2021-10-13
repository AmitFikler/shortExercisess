// let triel = new Promise((resolve,reject) => {
//     reject()
// })

// triel
// .then(()=> {
//     console.log("hello!!")
// })
// .catch(()=> {
//     console.log("BOOO!!")
// })
// .finally(()=> {
//     console.log("finaly")
// })

// const triel = () => {
//     return new Promise((resolve, reject)=> {
//         let rand = Math.random();
//         setTimeout(()=>{
//             if(rand>0.5) {
//                 resolve({status: 200, msg: "very good"})
//             }else{
//                 reject({status: 400, msg: "Didnt work"})
//             }
//         },1000)
//     })
// }

// triel()
// .then((data)=>{
//     console.log("resolve")
//     console.log(data.status,data.msg)
// })
// .catch((error)=> {
//     console.log("rejected")
//     console.log(error.status, error.msg)
// })

// const changeColor=(color,time)=> {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             let random = Math.random();
//             if (random > 0.5){
//                 document.querySelector("h1").style.backgroundColor = color
//                 resolve()
//             }else{
//                 reject({color: color})
//             }

//         },time)
//     })
// }

// changeColor("red",1000)
// .then(()=>changeColor("blue",1000))
// .then(()=>changeColor("yellow",1000))
// .then(()=>changeColor("pink",1000))
// .then(()=>changeColor("brown",1000))
// .then(()=>changeColor("red",1000))
// .then(()=>changeColor("blue",1000))
// .then(()=>changeColor("yellow",1000))
// .then(()=>changeColor("pink",1000))
// .then(()=>changeColor("brown",1000))
// .then(()=>changeColor("red",1000))
// .catch((error)=>console.log("rejected " + error.color))


// const fakeRequest = (_url) => {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             const pages = {
//                 '/users' : [
//                     {id:1, name:"David", email:"david@gmail.com"},
//                     {id:2, name:"Laura", email:"laura@gmail.com"},
//                     {id:3, name:"Rahim", email:"rahim@gmail.com"},
//             ], 
//             '/user/1':{
//                 userName:"David the Great",
//                 postTitle:"Do it yourself kitchen",
//                 postId: 101,
//                 followers: 100,
//                 city:"Ramat Gan"
//             },
//             '/user/2':{
//                 userName:"Laura the elegant",
//                 postTitle:"Running classes",
//                 postId: 202,
//                 followers: 400,
//                 city:"Jerusalem"
            
//             },'/post/101':{
//                 title:"Do it yourself kitchen",
//                 content:"How to build your very own kitchen",
//                 like:200
//             },
//             '/post/202':{
//                 title:"How to run 10Km",
//                 contant:"How do you go from couch potato, to running master",
//                 like:400
//             }
//         }
//         let data = pages[_url]
//         if(data){
//             resolve({data})
//         }else{
//             reject(err)
//         }
//         },1000)
//     })
// }

// fakeRequest('/users')
// .then((data)=>{
//     console.log("im in resolve")
//     let val = data.data[0].id
//     return fakeRequest(`/user/${val}`)
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch(()=>console.log("im in reject"))

// async function calc() {
//     throw "boo"
//     return "yay"

// }

// calc()
// .then((data)=>{
//     console.log("in resolve", data);
// })
// .catch(()=>{
//     console.log("in reject");
// })

// const signIn = async (_email,_password) => {
//     if(!_email || !_password) throw 'oh no'
//     if(_password === '12345') return 'welcome'
//     throw 'we need cradntials'
// }


// signIn('abc','12345')
// .then((data)=>{
//     console.log(data)
// })


// const changeColor=(color,time)=> {
//     return new Promise((resolve, reject)=> {
//         setTimeout(()=>{
//             let random = Math.random();
//             if (random > 0.0){
//                 document.querySelector("h1").style.backgroundColor = color
//                 resolve()
//             }else{
//                 reject({color: color})
//             }

//         },time)
//     })
// }

// async function allColors(){
//     await changeColor("red", 300)
//     await changeColor("blue", 300)
//     await changeColor("red", 300)
//     return {userId:19}
// }

// // allColors()
// // .then((msg)=>{
// //     console.log(msg.userId)
// // })
// document.querySelector("h1").addEventListener("click",allColors)

// function makeDelayPromise(value, delayInMs){
//     return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         if (value){
//           resolve()
//           console.log(value)
//         }else{
//           reject()
//         }
//       },delayInMs)
//     })
    
// }

// makeDelayPromise("hey",1000)

// function waitForPromise(promise, action){
//     return new Promise((resolve,reject)=>
    
//     )
// }

// waitForPromise("hello",console.log("hii"))


function squarePromise(numberPromise){
    return numberPromise
      .then(res =>{
          new Promise((resolve, reject)=>{
              console.log(res*res)
          })
    })
}

squarePromise(()=>console.log(1))

