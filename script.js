const quotes = [
  "Cinta adalah perjalanan tanpa peta.",
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
