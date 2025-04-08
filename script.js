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
