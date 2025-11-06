function showMessage(){
    alert("ご協力ありがとうございました！");
}

let c = 0;

function omikuji(){
    const r = Math.random();
    const el = document.getElementById("result");
    const a = document.getElementById("count");
    if(r < 0.05){
        el.textContent = "大吉：運だけはいいね";
    }
    else if(r < 0.20){
        el.textContent = "中吉：やるならやり切れよ";
    }
    else if(r < 0.40){
        el.textContent = "吉：吉はなんかちょっと特別感ある";
    }
    else if(r < 0.65){
        el.textContent = "小吉：いちばん中途半端";
    }
    else if(r < 0.85){
        el.textContent = "末吉：そんなのあったっけ";
    }
    else if(r < 0.95){
        el.textContent = "凶：狂";
    }
    else{
        el.textContent = "大凶：（笑）";
    }

    c++;
    a.textContent = c + "回です";
}

