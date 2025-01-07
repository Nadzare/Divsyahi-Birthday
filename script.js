gsap.fromTo(
    ".loading-page",
    { opacity: 1 },
    {
      opacity: 0,
      display: "none",
      duration: 1.5,
      delay: 3.5,
    }
  );
  
  gsap.fromTo(
    ".logo-name",
    {
      y: 50,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 2,
      delay: 0.5,
    }
  );


  document.getElementById("open-invitation").addEventListener("click", function () {
    // Hide the welcome section
    document.getElementById("container-welcome").style.display = "none";
  
    // Show the main content
    const mainContent = document.getElementById("main-content");
    mainContent.style.display = "block";
  
    // Optionally scroll to the main content
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
  



  document.addEventListener('scroll', () => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom >= 0) {
              el.classList.add('visible');
          }
      });
  });

  function showPopup(imageSrc) {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    const popupImage = document.getElementById('popup-image');
  
    popupImage.src = imageSrc;
    popup.classList.add('active');
    overlay.classList.add('active');
  }
  
  function hidePopup() {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
  
    popup.classList.remove('active');
    overlay.classList.remove('active');
  }
  





//   navbar
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});





// ayat
document.addEventListener("DOMContentLoaded", () => {
    const ayatElements = document.querySelectorAll(".ayat");
  
    // Intersection Observer for scrolling effect
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.2,
      }
    );
  
    // Observe each ayat element
    ayatElements.forEach((ayat) => observer.observe(ayat));
  });
  





  // Tanggal
  // Countdown Timer Logic
function updateCountdown() {
  const eventDate = new Date("2025-01-22T09:00:00").getTime(); // Set target date
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.querySelector(".countdown-timer").innerHTML = "<p>Acara telah dimulai!</p>";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;
}

// Update every second
setInterval(updateCountdown, 1000);















// Gallery
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const imgSrc = item.querySelector('img').src;
    openLightbox(imgSrc);
  });
});

function openLightbox(imgSrc) {
  // Create lightbox container
  const lightbox = document.createElement('div');
  lightbox.classList.add('lightbox');
  document.body.appendChild(lightbox);

  // Add image to lightbox
  const img = document.createElement('img');
  img.src = imgSrc;
  lightbox.appendChild(img);

  // Close lightbox on click
  lightbox.addEventListener('click', () => {
    document.body.removeChild(lightbox);
  });
}

// Lightbox CSS (Add this dynamically or include in your CSS file)
const style = document.createElement('style');
style.innerHTML = `
  .lightbox {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .lightbox img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 10px;
  }
`;
document.head.appendChild(style);











// comment & LovGift
// Copy account number to clipboard
document.querySelectorAll('.copy-btn').forEach(button => {
  button.addEventListener('click', () => {
    const accountNumber = button.getAttribute('data-account');
    navigator.clipboard.writeText(accountNumber)
      .then(() => alert(`Nomor rekening ${accountNumber} telah disalin!`))
      .catch(err => console.error('Gagal menyalin teks: ', err));
  });
});

// Handle form submission
// document.getElementById('comments-form').addEventListener('submit', (e) => {
//   e.preventDefault();

//   const name = document.getElementById('name').value;
//   const presence = document.getElementById('presence').value;
//   const message = document.getElementById('message').value;

//   if (name && presence && message) {
//     alert('Terima kasih atas ucapan dan doa Anda!');
//     document.getElementById('comments-form').reset(); // Clear the form
//   } else {
//     alert('Harap lengkapi semua kolom!');
//   }
// });







//sound
const backgroundMusic = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');
const toggleMusicButton = document.getElementById('toggle-music');

// Fungsi untuk memainkan musik
function playMusic() {
    backgroundMusic.play().catch(error => console.error('Music play error:', error));
}

// Fungsi untuk menghidupkan/mematikan musik
function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        musicIcon.classList.replace('fa-volume-mute', 'fa-volume-up');
        toggleMusicButton.classList.add('active');
    } else {
        backgroundMusic.pause();
        musicIcon.classList.replace('fa-volume-up', 'fa-volume-mute');
        toggleMusicButton.classList.remove('active');
    }
}

// Event: Otomatis mainkan musik saat halaman selesai dimuat
window.addEventListener('load', () => {
    playMusic();
    toggleMusicButton.classList.add('active'); // Indikasi bahwa musik sedang berjalan
});

// Event: Mainkan musik ketika tombol "Open Invitation" ditekan
document.getElementById('open-invitation').addEventListener('click', playMusic);

// Event: Toggle musik dengan tombol
toggleMusicButton.addEventListener('click', toggleMusic);





// navbar
// Ambil semua link di dalam navbar
const navLinks = document.querySelectorAll('.fixed-navbar .nav-link');

// Fungsi untuk menghapus kelas "active" dari semua link
function removeActiveClass() {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
}

// Tambahkan event listener ke setiap link
navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // Hapus kelas "active" dari semua link
    removeActiveClass();

    // Tambahkan kelas "active" pada link yang diklik
    this.classList.add('active');
  });
});








// email
document.getElementById("comments-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Mencegah reload halaman

  const form = e.target;
  const formData = new FormData(form);

  fetch(form.action, {
      method: form.method,
      body: formData,
      headers: {
          Accept: "application/json",
      },
  })
  .then((response) => {
      if (response.ok) {
          alert("Terima kasih atas ucapan dan doa Anda!");
          form.reset(); // Reset form setelah berhasil
      } else {
          alert("Harap lengkapi semua kolom!");
      }
  })
  .catch(() => {
      alert("Terjadi kesalahan saat mengirim formulir.");
  });
});
