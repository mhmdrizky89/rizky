// Greeting berdasarkan waktu
const greeting = document.getElementById("greeting");
const jam = new Date().getHours();

if (jam >= 5 && jam < 12) {
  greeting.textContent = "Selamat Pagi, Selamat Datang di Dunia Digital";
} else if (jam >= 12 && jam < 17) {
  greeting.textContent = "Selamat Siang, Selamat Datang di
