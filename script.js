document.addEventListener("DOMContentLoaded", function() {
  const externalLink = document.querySelector('a[href="https://e-resources.perpusnas.go.id/"]');
  
  if (externalLink) {
      externalLink.addEventListener("click", function(event) {
          event.preventDefault(); 
          const userConfirmation = confirm("Anda akan meninggalkan halaman ini dan menuju ke situs lain. Apakah Anda yakin?");
          
          if (userConfirmation) {
              window.open(this.href, "_blank"); 
          }
      });
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const text = "Selamat Datang di Perpustakaan Dian Fadhilla Siregar";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function typeText() {
      if (index < text.length) {
          const span = document.createElement("span");
          span.textContent = text.charAt(index);
          span.classList.add("fade-in"); 
          typingElement.appendChild(span);
          index++;
          setTimeout(typeText, 20); 
      }
  }

  typeText();
});

document.addEventListener("DOMContentLoaded", function () {
  const tableCells = document.querySelectorAll("table th, table td"); 
  function resetFadeIn() {
      
      tableCells.forEach(cell => {
          cell.style.opacity = "0";
          cell.style.transform = "translateY(15px)";
          cell.style.transition = "none"; 
      });

      
      setTimeout(() => {
          tableCells.forEach(cell => {
              cell.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
              cell.style.opacity = "1";
              cell.style.transform = "translateY(0)";
          });
      }, 50); 
  }

  
  resetFadeIn();
});



const newsContainer = document.querySelector('.news-container');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const newsCards = document.querySelectorAll('.news-card');
const totalNews = newsCards.length;
let currentSlide = 0;

function getItemsPerSlide() {
  return window.innerWidth <= 768 ? 1 : 3;
}

let itemsPerSlide = getItemsPerSlide();

function updateSlide() {
  const cardWidthPercentage = 100 / itemsPerSlide;
  newsCards.forEach(card => {
    card.style.flex = `0 0 ${cardWidthPercentage}%`;
  });

  const offset = -(currentSlide * 100);
newsContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  const maxSlide = Math.ceil(totalNews / itemsPerSlide) - 1;
  currentSlide = currentSlide < maxSlide ? currentSlide + 1 : 0;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  const maxSlide = Math.ceil(totalNews / itemsPerSlide) - 1;
  currentSlide = currentSlide > 0 ? currentSlide - 1 : maxSlide;
  updateSlide();
});

window.addEventListener('resize', () => {
  itemsPerSlide = getItemsPerSlide();
  currentSlide = 0;
  updateSlide();
});

updateSlide();

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav a');
  const modalBody = document.getElementById('navModalBody');
  const proceedLink = document.getElementById('proceedLink');
  const navModal = new bootstrap.Modal(document.getElementById('navModal'));

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const target = this.getAttribute('href');
      
      // Cegah langsung pindah halaman
      e.preventDefault();

      // Cek tujuan link
      if (target.includes('about.html')) {
        modalBody.textContent = 'Kenali lebih lanjut perpustakaan ini di sini.';
      } else if (target.includes('contact.html')) {
        modalBody.textContent = 'Ada pertanyaan atau saran? Hubungi kami di sini.';
      } else {
        // Untuk link lain tetap pindah langsung
        window.location.href = target;
        return;
      }

      // Set link tujuan
      proceedLink.href = target;

      // Tampilkan modal
      navModal.show();
    });
  });
});


// Cookie helpers
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
}

function getCookie(name) {
  const cname = name + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return "";
}

// Tampilkan sapaan
function showGreeting(name) {
  const greetingArea = document.getElementById("greeting-area");
  const greetingText = document.getElementById("greeting-text");
  greetingText.textContent = `Selamat datang kembali, ${name}!`;
  greetingArea.style.display = "block";
}

// Simpan nama dari modal
function saveUsername() {
  const name = document.getElementById("usernameInput").value;
  if (name) {
    setCookie("username", name, 30);
    showGreeting(name);
    const modal = bootstrap.Modal.getInstance(document.getElementById("nameModal"));
    modal.hide();
  }
}

// Saat halaman dimuat
window.onload = function() {
  const username = getCookie("username");
  if (username) {
    showGreeting(username);
  } else {
    const myModal = new bootstrap.Modal(document.getElementById("nameModal"));
    myModal.show();
  }
};
