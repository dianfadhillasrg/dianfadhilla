document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        } else {
            window.location.href = this.href; // Jika bukan id, langsung buka halaman
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.container, .header').forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
        setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, 200);
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("a");
    
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            const confirmation = confirm("Apakah Anda yakin ingin berpindah ke halaman lain?");
            if (!confirmation) {
                event.preventDefault(); // Mencegah navigasi jika pengguna memilih 'Batal'
            }
        });
    });
});
