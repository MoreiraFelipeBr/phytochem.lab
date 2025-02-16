let lastScroll = window.scrollY;
const header = document.getElementById("header");
const contatosTop = document.getElementById("contatosTop");

window.addEventListener("scroll", () => {
    let currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        headerMovel.classList.add("hidden");
        contatosTop.classList.add("hidden"); // Esconde contatos-top
        /* header.classList.add("reduzido"); // Reduz a altura do header */
    } else {
        headerMovel.classList.remove("hidden");
        contatosTop.classList.remove("hidden"); // Mostra contatos-top
        /* header.classList.remove("reduzido"); // Restaura a altura original do header */
    }

    lastScroll = currentScroll;
});

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
        }, 300); // Tempo de transição correspondente ao CSS
    });
});