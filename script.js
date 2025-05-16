const quotes = [
  "Cinta const quotes = [
  "Cinta adalah kamu dalam bentuk paling manis.",
  "Pelukmu adalah tempat favoritku.",
  "Bersamamu, waktu terasa berhenti.",
  "Kamu bukan segalanya, tapi tanpamu aku bukan apa-apa.",
  "Cinta kita bukan main-main, ini serius dan lucu."
];

let index = 0;
let likes = 0;

const quoteEl = document.getElementById('quote');
const likeBtn = document.getElementById('likeBtn');
const toggleDark = document.getElementById('toggleDark');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Ganti quote otomatis tiap 4 detik
setInterval(() => {
  index = (index + 1) % quotes.length;
  quoteEl.textContent = `"${quotes[index]}"`;
}, 4000);

// Like animation
likeBtn.addEventListener('click', () => {
  likes++;
  likeBtn.textContent = `Like ❤️ ${likes}`;
  likeBtn.style.animation = 'like-pop 0.3s';
  likeBtn.addEventListener('animationend', () => {
    likeBtn.style.animation = '';
  }, { once: true });
});

// Dark mode toggle
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleDark.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

// Music control
let musicPlaying = true;
musicToggle.addEventListener('click', () => {
  if (musicPlaying) {
    bgMusic.pause();
    musicToggle.textContent = '🔇';
  } else {
    bgMusic.play();
    musicToggle.textContent = '🔊';
  }
  musicPlaying = !musicPlaying;
}); perjalanan tanpa peta.",
  "Kamu adalah alasan aku tersenyum setiap hari.",
  "Dalam pelukanmu, aku temukan rumah.",
  "Cinta sejati tak pernah berakhir, hanya berubah bentuk.",
  "Kamu dan aku, kita adalah cerita yang takkan terlupakan."
];

let currentIndex = 0;
const quoteEl = document.getElementById('quote');
const likeBtn = document.getElementById('likeBtn');
const toggleDark = document.getElementById('toggleDark');

function showNextQuote() {
  currentIndex = (currentIndex + 1) % quotes.length;
  quoteEl.textContent = quotes[currentIndex];
}

// Ganti quote tiap 4 detik
setInterval(showNextQuote, 4000);

// Like button counter
let likes = 0;
likeBtn.addEventListener('click', () => {
  likes++;
  likeBtn.textContent = `Like ❤️ ${likes}`;
});

// Dark mode toggle
toggleDark.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleDark.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
