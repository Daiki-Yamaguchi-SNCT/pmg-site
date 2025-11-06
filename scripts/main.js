    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (hour < 6) {
      greeting.textContent = "早起きですね！健康的で素晴らしいです🌅";
    } else if (hour < 22) {
      greeting.textContent = "今日も夜8時30分にお待ちしておりますよ^^♪";
    } else {
      greeting.textContent = "もう夜更かしの時間ですね…おやすみなさい🌙";
    }