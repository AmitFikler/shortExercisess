let cat = {
    tiredness:5,
    hunger:2,
    lonliness:10,
    happiness:0
}

function feed(){
    if (cat.hunger <= 0){
        console.log("im not hungry")
    } else {
        cat.hunger -= 1
    }
}

function sleep(){
    if (cat.tiredness <= 0){
        console.log("im not tired")
    } else {
        cat.tiredness -= 1
    }
}

function play(){
    if (cat.hunger === 10){
        console.log("im to hungry for this")
    } else {
        cat.hunger += 1
        cat.happiness += 1
    }
}

function catStatus(){
    if(cat.hunger > 9) {
        console.log("feed me!!!")
    }
    if(cat.happiness < 7){
        console.log("I need some fun")
    }
    if(cat.tiredness > 6) {
        console.log("let me sleep");
    }
    if(cat.tiredness > 6) {
        console.log("I need a friend");
    }
}

console.log(cat);
catStatus()
play()
play()
play()
play()
play()
play()
play()
catStatus()
