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

document.addEventListener("DOMContentLoaded", loadComments);

function addComment() {
    let username = document.getElementById("username").value.trim();
    let commentText = document.getElementById("comment").value.trim();

    if (username === "" || commentText === "") {
        alert("Nama dan komentar tidak boleh kosong!");
        return;
    }

    let comment = { name: username, text: commentText };
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    comments.push(comment);

    // **Simpan komentar ke Local Storage**
    localStorage.setItem("comments", JSON.stringify(comments));

    // **Kosongkan input setelah komentar dikirim**
    document.getElementById("username").value = "";
    document.getElementById("comment").value = "";

    // **Tampilkan komentar terbaru**
    loadComments();
}

function loadComments() {
    let comments = JSON.parse(localStorage.getItem("comments")) || [];
    let commentSection = document.getElementById("comments");

    
    commentSection.innerHTML = "";

    comments.forEach(comment => {
        let commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerHTML = `<strong>${comment.name}:</strong> ${comment.text}`;
        commentSection.appendChild(commentDiv);
    });
}
