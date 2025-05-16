// Greeting otomatis berdasarkan waktu
const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour >= 5 && hour < 12) {
  greeting.textContent = "Selamat Pagi, Selamat Datang di Dunia Digital";
} else if (hour >= 12 && hour < 17) {
  greeting.textContent = "Selamat Siang, Selamat Datang di Dunia Digital";
} else if (hour >= 17 && hour < 21) {
  greeting.textContent = "Selamat Sore, Selamat Datang di Dunia Digital";
} else {
  greeting.textContent = "Selamat Malam, Selamat Datang di Dunia Digital";
}

// Simulasi loading tombol
function btnClick() {
  const btn = document.querySelector(".btn");
  btn.textContent = "Loading...";
  btn.style.backgroundColor = "#fff";
  btn.style.color = "#000";
  setTimeout(() => {
    btn.textContent = "Lihat Proyek";
    btn.style.backgroundColor = "var(--btn-bg)";
    btn.style.color = "#000";
  }, 2000);
}

// Dark mode toggle
const toggleDark = document.getElementById("toggleDark");
toggleDark.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleDark.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
