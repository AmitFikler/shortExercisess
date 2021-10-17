import css from "./styles.css"
import { equals,add,sub,multiply,divide } from "./helpers/math"


const plusBtn = document.getElementsByName("plus")[0];
const subBtn = document.getElementsByName("sub")[0];
const multiplyBtn = document.getElementsByName("multiply")[0];
const divideBtn = document.getElementsByName("divide")[0];
const resultInput = document.querySelector("input");
const equelsBtn = document.getElementsByName("equels")[0];
const dot = document.getElementsByName("dot")[0];
const sqrt = document.getElementsByName("sqrt")[0];
const deleteBtn = document.getElementsByName("delete")[0];

sqrt.addEventListener("click",()=>{
    resultInput.value = Math.sqrt(resultInput.value) ;
})

dot.addEventListener("click",()=>{
    if (resultInput.value.includes(".") || resultInput.value.length === 0){
        return;
    } else {
        resultInput.value += ".";
    }
})

deleteBtn.addEventListener("click", ()=>{
    resultInput.value = "";
})

plusBtn.addEventListener("click",()=>{
    calcObj.n1 = Number(resultInput.value);
    calcObj.action = add;
    resultInput.value = ""
})

equelsBtn.addEventListener("click",()=>{
    calcObj.n2 = Number(resultInput.value)
    resultInput.value = equals(calcObj.n1, calcObj.n2, calcObj.action)
})

subBtn.addEventListener("click",()=>{
    calcObj.n1 = Number(resultInput.value);
    calcObj.action = sub;
    resultInput.value = "";
})
multiplyBtn.addEventListener("click",()=>{
    calcObj.n1 = Number(resultInput.value);
    calcObj.action = multiply;
    resultInput.value = "";
})
divideBtn.addEventListener("click",()=>{
    calcObj.n1 = Number(resultInput.value);
    calcObj.action = divide;
    resultInput.value = "";
})

document.querySelectorAll(".number").forEach(number =>{
    number.addEventListener("click",pressNumber);
})

function pressNumber(e){
    resultInput.value = resultInput.value + e.target.value;
}

let calcObj = {}
