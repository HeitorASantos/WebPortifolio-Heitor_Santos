// DADOS DOS PROJETOS
const projects = [
    { 
        title: "Eu Digo X",
        category: "Full Stack",
        description: "Plataforma web para cálculo da síndrome do X Frágil e gerenciamento profissional para o instituto Buko Kaesemodel. ",
        icon: '<i class="fa-solid fa-stethoscope"></i>' + '<i class="fa-solid fa-xmark"></i>' , 
        link: "#https://github.com/HeitorASantos/XFragil-EC-BCC" 
    },
    { 
        title: "Todoo! - Sistema de Pendências",
        category: "Python",
        description: "Sistema para gerenciamento de tarefas com interface gráfica e banco de dados.",
        icon: '<i class="fa-solid fa-rectangle-list"></i>', 
        link: "#https://github.com/HeitorASantos/Todoo-gerenciador-de-pend-ncias-Terminal-Aplica-o-.-" 
    },
    {
         title: "Projeto Web",
         category: "Front-end",
         description: "Página web responsiva desenvolvida utilizando HTML, CSS e JavaScript.",
         icon: '<i class="fa-solid fa-code"></i>', 
         link: "#"
    },
    { 
        title: "Jogo de Damas em Java",
        category: "Java",
        description: "Projeto acadêmico aplicando orientação a objetos e estruturas de dados.",
        icon: '<i class="fa-solid fa-chess-board"></i>', 
        link: "#https://github.com/HeitorASantos/Jogo-de-Damas-Java-" 
    },
    { 
        title: "Banco de Dados",
        category: "SQL", description: "Modelagem, consultas SQL, relacionamentos e manipulação de dados.",
        icon: '<i class="fa-solid fa-database"></i>',
        link: "#https://github.com/HeitorASantos/Documenta-o-banco-de-dados-para-e-commerce-Trabalho-Facultativo-"
    },
    { 
        title: "Monitor de sistemas",
        category: "Python", 
        description: "Aplicação desenvolvida para mostrar dados estáticos e dinâmicos de software, hardware e rede.",
        icon: '<i class="fa-solid fa-computer"></i>' + '<i class="fa-solid fa-wifi"></i>'+ '<i class="fa-solid fa-gears"></i>',
        link: "#https://github.com/HeitorASantos/Monitor-de-Sistema-Python" 
    }
];

const languages = [
    { 
        name: "Python",
        level: "Avançado", 
        icon: '<i class="fa-brands fa-python"></i>' 
    },
    { 
        name: "Java", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-java"></i>' 
    },
    { 
        name: "C", 
        level: "Básico", 
        icon: '<i class="fa-solid fa-c"></i>' 
    },
    {
        name: "HTML5", 
        level: "Avançado", 
        icon: '<i class="fa-brands fa-html5"></i>' 
    },
    { 
        name: "CSS3", 
        level: "Avançado", 
        icon: '<i class="fa-brands fa-css3-alt"></i>' 
    },
    { 
        name: "JavaScript", 
        level: "Básico", 
        icon: '<i class="fa-brands fa-js"></i>' 
    },
    { 
        name: "PHP", 
        level: "Básico", 
        icon: '<i class="fa-brands fa-php"></i>' 
    },
    { 
        name: "SQL", 
        level: "Avançado", 
        icon: '<i class="fa-solid fa-database"></i>' 
    }
];

const tools = [
    { 
        name: "VS Code", 
        level: "Avançado", 
        icon: '<i class="fa-solid fa-laptop-code"></i>' 
    },
    { 
        name: "Git", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-git-alt"></i>' 
    },
    { 
        name: "GitHub", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-github"></i>' 
    },
    { 
        name: "Microsoft Office", 
        level: "Avançado", 
        icon: '<i class="fa-regular fa-file"></i>' 
    },
    { 
        name: "MySQL", 
        level: "Intermediário", 
        icon: '<i class="fa-solid fa-server"></i>' 
    },
    { 
        name: "IntelliJ IDEA", 
        level: "Intermediário", 
        icon: '<i class="fa-solid fa-code"></i>' 
    },
    { 
        name: "PyCharm", 
        level: "Avançado", 
        icon: '<i class="fa-solid fa-terminal"></i>' 
    },
    {
         name: "Oracle VirtualBox",
         level: "Avançado",
         icon: '<i class="fa-solid fa-desktop"></i>'
    },
    {
         name: "Cisco Packet Tracer",
         level: "Básico",
         icon: '<i class="fa-solid fa-globe"></i>'
    }
    
];

const systems = [
    { 
        name: "Windows", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-windows"></i>' 
    },
    { 
        name: "Linux", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-linux"></i>' 
    },
    { 
        name: "Arch Linux", 
        level: "Intermediário (atual)", 
        icon: '<i class="fa-solid fa-linux"></i>' 
    },
    { 
        name: "Ubuntu/Lubuntu", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-ubuntu"></i>' 
    },
    { 
        name: "Fedora", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-fedora"></i>' 
    },
    { 
        name: "Kali Linux", 
        level: "Intermediário", 
        icon: '<i class="fa-solid fa-dragon"></i>' 
    }
];

// RENDERIZAR PROJETOS
const projectGrid = document.getElementById("projectGrid");

if (projectGrid) {
    projects.forEach(p => {
        projectGrid.innerHTML += `
            <article class="project-card">
                <div class="project-image">${p.icon}</div>
                <div class="project-content">
                    <span class="project-category">${p.category}</span>
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <a href="${p.link}" class="project-link">Ver projeto ↗</a>
                </div>
            </article>
        `;
    });

    // CLONAR ELEMENTOS DO CARROSSEL (LÓGICA INFINITA)
    const originalCards = [...projectGrid.children];
    originalCards.forEach(card => {
        projectGrid.appendChild(card.cloneNode(true));
    });

    // LÓGICA DO CARROSSEL
    let position = 0;
    let speed = 0.50;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startPosition = 0;

    function getCarouselWidth() {
        const card = originalCards[0];
        if (!card) return 0;
        const gap = 22;
        return (card.offsetWidth + gap) * originalCards.length;
    }

    function animateCarousel() {
        if (!paused && !dragging) {
            position -= speed;
            const totalWidth = getCarouselWidth();

            if (Math.abs(position) >= totalWidth) {
                position += totalWidth;
            }

            projectGrid.style.transform = `translateX(${position}px)`;
        }
        requestAnimationFrame(animateCarousel);
    }

    const carousel = document.querySelector(".project-carousel");

    if (carousel) {
        carousel.addEventListener("pointerdown", e => {
            dragging = true;
            paused = true;
            startX = e.clientX;
            startPosition = position;
            carousel.setPointerCapture(e.pointerId);
        });

        carousel.addEventListener("pointermove", e => {
            if (!dragging) return;
            const movement = e.clientX - startX;
            position = startPosition + movement;
            const totalWidth = getCarouselWidth();

            if (position > 0) position -= totalWidth;
            if (Math.abs(position) >= totalWidth) position += totalWidth;

            projectGrid.style.transform = `translateX(${position}px)`;
        });

        carousel.addEventListener("pointerup", e => {
            dragging = false;
            paused = false;
            carousel.releasePointerCapture(e.pointerId);
        });

        carousel.addEventListener("pointercancel", () => {
            dragging = false;
            paused = false;
        });

        carousel.addEventListener("mouseenter", () => paused = true);
        carousel.addEventListener("mouseleave", () => {
            if (!dragging) paused = false;
        });

        animateCarousel();
    }
}

// RENDERIZAR SEÇÃO DE CONHECIMENTOS
function criarConhecimentos(lista, id) {
    const container = document.getElementById(id);
    if (!container) return;

    lista.forEach(item => {
        container.innerHTML += `
            <article class="knowledge-card">
                <div class="knowledge-icon">${item.icon}</div>
                <div class="knowledge-info">
                    <h4 class="knowledge-name">${item.name}</h4>
                    <p class="knowledge-level">${item.level}</p>
                </div>
            </article>
        `;
    });
}

criarConhecimentos(languages, "languagesList");
criarConhecimentos(tools, "toolsList");
criarConhecimentos(systems, "systemsList");

// ANIMAÇÕES DE REVEAL (INTERSECTION OBSERVER)
const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(e => reveal.observe(e));

// HIGHLIGHT DOS LINKS DE NAVEGAÇÃO AO ROLAR A PÁGINA
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle(
                    "active",
                    link.getAttribute("href") === `#${entry.target.id}`
                );
            });
        }
    });
}, { rootMargin: "-35% 0px -55% 0px" });

sections.forEach(section => sectionObserver.observe(section));

// ANO AUTOMÁTICO NO FOOTER
const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

// LÓGICA DE TRADUÇÃO AUTOMÁTICA (3 IDIOMAS: PT, EN, ES)
const translateBtn = document.getElementById("translateBtn");
const langText = document.getElementById("langText");

const languagesCycle = [
    { code: "pt", label: "PT" },
    { code: "en", label: "EN" },
    { code: "es", label: "ES" },
    { code: "pt", label: "PT" }
];

let currentLangIndex = 0;

if (translateBtn && langText) {
    translateBtn.addEventListener("click", () => {
        currentLangIndex = (currentLangIndex + 1) % languagesCycle.length;
        const targetLang = languagesCycle[currentLangIndex];
        
        langText.textContent = targetLang.label;

        const select = document.querySelector(".goog-te-combo");
        if (select) {
            select.value = targetLang.code;
            select.dispatchEvent(new Event("change"));
        }
    });
}

// CONTROLE DO MENU MOBILE E SCROLL SUAVE
const navbar = document.querySelector(".navbar");
const navLinksContainer = document.getElementById("navLinks");
const menuButton = document.getElementById("menuButton");

if (menuButton && navLinksContainer) {
    // Alterna a abertura do menu mobile
    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinksContainer.classList.toggle("active");
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener("click", (e) => {
        if (!navLinksContainer.contains(e.target) && !menuButton.contains(e.target)) {
            navLinksContainer.classList.remove("active");
        }
    });
}

// Scroll suave e fechamento automático ao clicar nos links do menu
if (navLinks.length > 0) {
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            const target = document.querySelector(link.getAttribute("href"));
            if (!target) return;

            e.preventDefault();
            
            const offset = navbar ? navbar.offsetHeight : 0;
            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: "smooth"
            });

            if (navLinksContainer) {
                navLinksContainer.classList.remove("active");
            }
        });
    });
}