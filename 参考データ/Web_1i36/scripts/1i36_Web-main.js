function showMessage(){
    alert("ご協力ありがとうございました");
}



let isWanko = false;
let swapCharacter;
const showImage = document.getElementById("show-image");
function wanko(){
    if(wa.textContent ==   n.textContent && ko.textContent == wa.textContent){
        showImage.style.display = "block";
        alert("Thank you!下にスクロール");
    }
    if(!isWanko){
        isWanko = true;
        
    }else{
        isWanko = false;
        clearInterval(swapCharacter);
    }
}
function swap(){
    const rrr = Math.random();
    const wa = document.getElementById("wa");
    
    if(rrr < 0.3){
        wa.textContent = "🐶";
    }
    else if(rrr < 0.7){
        wa.textContent = "🐕";
    }
    else{
        wa.textContent = "🐩";
    }
}

let isWanko2 = false;
let swapCharacter2;
function wanko2(){
    if(wa.textContent ==   n.textContent && ko.textContent == wa.textContent){
        showImage.style.display = "block";
        alert("Thank you!下にスクロール");
    }
    if(!isWanko2){
        isWanko2 = true;
        
    }else{
        isWanko2 = false;
        clearInterval(swapCharacter2);
    }
}
function swap2(){
    const rrr = Math.random();
    const n = document.getElementById("n");
    if(rrr < 0.3){
        n.textContent = "🐶";
    }
    else if(rrr < 0.7){
        n.textContent = "🐕";
    }
    else{
        n.textContent = "🐩";
    }
}
let isWanko3 = false;
let swapCharacter3;
function wanko3(){
    if(wa.textContent ==   n.textContent && ko.textContent == wa.textContent){
        showImage.style.display = "block";
        alert("Thank you!下にスクロール");
    }
    if(!isWanko3){
        isWanko3 = true;
        
    }else{
        isWanko3 = false;
        clearInterval(swapCharacter3);
    }
}
function swap3(){
    const rrr = Math.random();
    const ko = document.getElementById("ko");
    if(rrr < 0.3){
        ko.textContent = "🐶";
    }
    else if(rrr < 0.7){
        ko.textContent = "🐕";
    }
    else{
        ko.textContent = "🐩";
    }
}

function start(){
    if(swapCharacter == undefined){
        swapCharacter = setInterval(swap, 50);
    }else{
        clearInterval(swapCharacter);
        swapCharacter = setInterval(swap, 50);
    }
    if(swapCharacter2 == undefined){
        swapCharacter2 = setInterval(swap2, 50);
    }else{
        clearInterval(swapCharacter2);
        swapCharacter2 = setInterval(swap2, 50);
    }
        if(swapCharacter3 == undefined){
        swapCharacter3 = setInterval(swap3, 50);
    }else{
        clearInterval(swapCharacter3);
        swapCharacter3 = setInterval(swap3, 50);
    }

    isWanko = true;
    isWanko2 = true;
    isWanko3 = true;
}




const inuzuki = document.getElementById("inuzuki");
inuzuki.addEventListener('mouseover', () => {
    inuzuki.innerHTML = '<input type="radio" name="設問１"></input>' + "大好きだ";
});