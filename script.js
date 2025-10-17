// تشغيل الصوت
document.getElementById("playAudio").addEventListener("click", () => {
  const audio = new Audio("https://server10.mp3quran.net/ajm/128/018.mp3");
  audio.play();
});

// الوضع الداكن
document.getElementById("toggleDark").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// مشاركة الصفحة
document.getElementById("shareBtn").addEventListener("click", async () => {
  await navigator.share({
    title: "سورة الكهف",
    text: "استمع إلى سورة الكهف كاملة بصوت جميل 🎧",
    url: window.location.href,
  });
});

// عرض الآيات
const ayahsContainer = document.getElementById("ayahs");
fetch("https://api.alquran.cloud/v1/surah/18/quran-uthmani")
  .then(res => res.json())
  .then(data => {
    data.data.ayahs.forEach(a => {
      ayahsContainer.innerHTML += `<span class="ayah">${a.text}<span class="num">${a.numberInSurah}</span></span> `;
    });
  });
