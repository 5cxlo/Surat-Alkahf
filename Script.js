// 🎧 تلاوة الشيخ العجمي
const AUDIO_URL = "https://server10.mp3quran.net/ajm/128/018.mp3";
const audio = new Audio(AUDIO_URL);
audio.preload = "none";
let isPlaying = false;

// عناصر التحكم
const toggleModeBtn = document.getElementById("toggleMode");
const playAudioBtn  = document.getElementById("playAudio");
const shareBtn      = document.getElementById("shareBtn");

// تشغيل / إيقاف الصوت
playAudioBtn.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    playAudioBtn.textContent = "▶️ استماع";
  } else {
    audio.play().catch(()=>{});
    playAudioBtn.textContent = "⏸️ إيقاف";
  }
  isPlaying = !isPlaying;
});
audio.addEventListener("ended", () => {
  isPlaying = false;
  playAudioBtn.textContent = "▶️ استماع";
});

// تبديل الوضع الليلي
toggleModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleModeBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ وضع فاتح" : "🌙 وضع داكن";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta)
    meta.setAttribute("content",
      document.body.classList.contains("dark") ? "#0f1213" : "#3b7f5a");
});

// مشاركة الرابط
shareBtn.addEventListener("click", async () => {
  try {
    await navigator.share({
      title: "سورة الكهف",
      text: "اقرأ سورة الكهف كاملة واستمع للتلاوة 💚",
      url: location.href
    });
  } catch(e){
    navigator.clipboard?.writeText(location.href);
    alert("تم نسخ الرابط للمشاركة.");
  }
});
