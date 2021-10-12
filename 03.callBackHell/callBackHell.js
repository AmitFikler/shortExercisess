function cheakTriangle(a,b,c) {
    return sqrValue(a) + sqrValue(b) === sqrValue(c)
}

function sqrValue(num) {
    return multiplication(num, num)
}

function multiplication(num, multi) {
    return num * multi
}


console.log("first call");
setTimeout(()=> {
    console.log("second call");
},2000)
console.log("third call");


function changeBackground(time, color, callback, reject) {
    const randomNam = Math.floor(Math.random()*10+1);
    setTimeout(()=> {
        if(randomNam<5) {
            reject();            
        }else{
            document.querySelector("body").style.backgroundColor = color;
            callback();
        } 
    },time*1000)
}


changeBackground(1,"red",()=> {
    changeBackground(1,"blue", ()=> {
        changeBackground(1,"yellow", ()=> {
           changeBackground(1,"pink", ()=>{
               changeBackground(1,"green", ()=>{
                   changeBackground(1,"orange",()=>{
                       changeBackground(1,"purple",()=>{
                           changeBackground(1,"brown", ()=>{},()=> {
                               console.log("failed with color brown");
                           });
                       }, ()=> {
                            console.log("failed with color purple");
                       });
                   }, ()=> {
                       console.log("failed with color orange");
                   });
               }, ()=> {
                   console.log("failed with color pink");
               });
           },()=> {
                console.log("failed with color pink");
            }); 
            }, ()=> {
            console.log("failed with color yellow");
        });
        },()=>{
        console.log("failed with color blue");
        });
    },()=> {
    console.log("failed with color red");
});
