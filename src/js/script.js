// Hamburger line animation
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');


hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Navbar fixed on scroll
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.add('hidden');
    }
}

// Klik diluar hamburger untuk menutup menu
window.addEventListener('click', function(e){
    if(e.target != navMenu && e.target != hamburger) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// Definisi elemen
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

// --- 1. Cek Posisi Awal (Default Dark) ---
// Logika: Jika di LocalStorage ada 'dark' ATAU belum ada settingan sama sekali (pengunjung baru)
if (localStorage.theme === 'dark' || (!('theme' in localStorage))) {
    html.classList.add('dark');
    darkToggle.checked = true; // Ubah toggle menjadi "nyala"
} else {
    html.classList.remove('dark');
    darkToggle.checked = false;
}

// --- 2. Event Listener saat tombol diklik ---
darkToggle.addEventListener('click', function() {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark'; // Simpan ke memori browser
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'light'; // Simpan ke memori browser
    }
});


var typed = new Typed('#typewriter', {
      // Masukkan kata-kata yang ingin ditampilkan di sini
      strings: ['M. Alfin Maulana', 'Tech Enthusiast', 'Lifelong Learner'], 
      
      typeSpeed: 100, // Kecepatan mengetik (makin kecil makin cepat)
      backSpeed: 50,  // Kecepatan menghapus (backspace)
      backDelay: 2000, // Jeda sebelum menghapus teks (2 detik)
      startDelay: 500, // Jeda sebelum mulai mengetik awal
      loop: true,     // Mengulang terus menerus
      showCursor: true, // Menampilkan kursor berkedip '|'
 });
