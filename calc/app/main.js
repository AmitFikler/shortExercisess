// import "./styles.css";
const plusBtn = document.getElementsByName("plus")[0]
const subBtn = document.getElementsByName("sub")[0]
const multiplyBtn = document.getElementsByName("multiply")[0]
const divideBtn = document.getElementsByName("divide")[0]
const resultInput = document.querySelector("input") 

plusBtn.addEventListener("click",()=>{
    console.log("hello");
})

subBtn.addEventListener("click",()=>{
    console.log("hello");
})
multiplyBtn.addEventListener("click",()=>{
    console.log("hello");
})
divideBtn.addEventListener("click",()=>{
    console.log("hello");
})

document.querySelectorAll(".number").forEach(number =>{
    number.addEventListener("click",pressNumber)
})


function pressNumber(e){
    resultInput.value = resultInput.value + e.target.value
}