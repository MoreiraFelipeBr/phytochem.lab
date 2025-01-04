// Opção para animação fade-in ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(".service-item");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.5 }
    );

    items.forEach((item) => {
        item.style.opacity = 0;
        item.style.transform = "translateY(20px)";
        observer.observe(item);
    });
});
