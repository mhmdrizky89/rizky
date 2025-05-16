// Greeting berdasarkan waktu
const greeting = document.getElementById("greeting");
const jam = new Date().getHours();

if (jam >= 5 && jam < 12) {
  greeting.textContent = "Selamat Pagi, Selamat Datang di Dunia Digital";
} else if (jam >= 12 && jam < 17) {
  greeting.textContent = "Selamat Siang, Selamat Datang di Dunia Digital";
} else if (jam >= 17 && jam < 21) {
  greeting.textContent = "Selamat Sore, Selamat Datang di Dunia Digital";
} else {
  greeting.textContent = "Selamat Malam, Selamat Datang di Dunia Digital";
}

// Animasi tombol
function btnClick() {
  const btn = document.querySelector(".btn");
  btn.textContent = "Loading...";
  btn.style.backgroundColor = "#fff";
  btn.style.color = "#000";

  setTimeout(() => {
    btn.textContent = "Lihat Proyek";
    btn.style.backgroundColor = "#00ffd5";
    btn.style.color = "#000";
  }, 2000);
}
