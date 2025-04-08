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
const itemsPerSlide = 3;
let currentSlide = 0;

function updateSlide() {
  const offset = -(currentSlide * 100);
  newsContainer.style.transform = `translateX(${offset}%)`;
}

nextBtn.addEventListener('click', () => {
  if (currentSlide < Math.ceil(totalNews / itemsPerSlide) - 1) {
    currentSlide++;
  } else {
    currentSlide = 0; // balik ke awal
  }
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--;
  } else {
    currentSlide = Math.ceil(totalNews / itemsPerSlide) - 1; // ke slide terakhir
  }
  updateSlide();
});
