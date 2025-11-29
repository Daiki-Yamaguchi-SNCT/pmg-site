    const hour = new Date().getHours();
    const greeting = document.getElementById("greeting");

    if (hour < 6) {
      greeting.textContent = "早起きですね！健康的で素晴らしいです🌅";
    } else if (hour < 22) {
      greeting.textContent = "今日も夜8時30分にお待ちしておりますよ^^♪";
    } else {
      greeting.textContent = "もう夜更かしの時間ですね…おやすみなさい🌙";
    }

    let currentSlideIndex = 0;
    const sliderSlides = document.querySelectorAll('.slider-slide');
    const sliderDots = document.querySelectorAll('.slider-dot');

    function showSliderSlide(index) {
        // インデックスが範囲外の場合の処理
        if (index >= sliderSlides.length) {
            currentSlideIndex = 0;
        } else if (index < 0) {
            currentSlideIndex = sliderSlides.length - 1;
        } else {
            currentSlideIndex = index;
        }

        // スライド位置の変更
        document.querySelector('.slider-slides').style.transform = `translateX(-${currentSlideIndex * 100}%)`;

        // インジケーターの更新
        sliderDots.forEach((dot, i) => {
            dot.classList.toggle('slider-active', i === currentSlideIndex);
        });
    }

    // 自動スライド機能
    function startSliderAutoSlide() {
        setInterval(() => {
            showSliderSlide(currentSlideIndex + 1);
        }, 3000); // 3秒ごとにスライド
    }

    // インジケータークリックイベント
    sliderDots.forEach((dot, i) => {
        dot.addEventListener('click', () => showSliderSlide(i));
    });

    // 初期表示
    showSliderSlide(currentSlideIndex);
    startSliderAutoSlide();

const secret = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
let pos = 0;

const noiseVideo = document.getElementById("noiseVideo");
const black = document.getElementById("blackout");

document.addEventListener("keydown", (e) => {
  if (e.key === secret[pos]) {
    pos++;
    if (pos === secret.length) {
      noiseVideo.classList.add("active");
      setTimeout(() => black.classList.add("active"), 200);
      setTimeout(() => window.location.href="paraQ.html", 700);
      pos = 0;
    }
  } else pos = 0;
});
