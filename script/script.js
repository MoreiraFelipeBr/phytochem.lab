
const header = document.getElementById("header");
const contatosTop = document.getElementById("contatosTop");
const imgLogo = document.getElementById("imglogo");

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY; // Obtém a posição atual do scroll

    if (scrollPosition > 15) { 
        header.classList.add("header-fixed");
        header.style.top = "0";
        document.querySelector(".header-content").style.border = "none";
        contatosTop.classList.add("hidden");

        if (scrollPosition > 50) {
            header.style.backgroundColor = "white";
            imgLogo.src = "img/logo-blue.png";
            document.querySelectorAll('#menu a').forEach(link => {
                link.style.color = 'var(--primary-azul)';
            });
        }
    } else {
        imgLogo.src = "img/logo-white.png";
        header.classList.remove("header-fixed");
        header.style.top = "0";
        document.querySelector(".header-content").style.border = "";
        header.style.backgroundColor = "";
        contatosTop.classList.remove("hidden");
        document.querySelectorAll('#menu a').forEach(link => {
            link.style.color = 'var(--claro)';
        });
    }
});

/* let lastScroll = window.scrollY;
const header = document.getElementById("header");
const contatosTop = document.getElementById("contatosTop");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        
        header.classList.add("header-fixed");
        header.style.top = "0";
        document.querySelector(".header-content").style.border = "none";
        header.style.backgroundColor = "white";
        contatosTop.classList.add("hidden"); 
        document.getElementById("imglogo").src = "img/logo-blue.png";
    } else {
        document.getElementById("imglogo").src = "img/logo-white.png";
        header.classList.remove("header-fixed");
        header.style.top = "0";
        document.querySelector(".header-content").style.border = "";
        header.style.backgroundColor = "";
        contatosTop.classList.remove("hidden"); 
    }

    lastScroll = currentScroll;
}); 
*/

// Menu
document.addEventListener('DOMContentLoaded', function () {
    const openMenu = document.getElementById('openMenu');
    const closeMenu = document.getElementById('closeMenu');
    const menu = document.getElementById('menu');

    openMenu.addEventListener('click', () => {
        menu.style.display = 'flex';
        menu.style.right = (menu.offsetWidth * -1) + 'px';
        setTimeout(() => {
            menu.style.opacity = 1;
            menu.style.right = '0';
        }, 10);
    });

    closeMenu.addEventListener('click', () => {
        menu.style.opacity = '0';
        menu.style.right = (menu.offsetWidth * -1) + 'px';
        setTimeout(() => {
            menu.style.display = 'none';
        }, 300); 
    });
});

//scroll section sobre
function scrollServicos(direction) {
    const container = document.querySelector('.corpodasecao');
    const scrollAmount = 300; // Quantidade de rolagem (ajuste conforme necessário)

    if (direction === 'left') {
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'right') {
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

//Formulário

document.getElementById('collectionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Aqui você pode adicionar a lógica para processar o formulário, como enviá-lo para um servidor.
    alert('Formulário enviado com sucesso!');
});