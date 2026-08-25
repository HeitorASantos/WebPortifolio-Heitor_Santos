const projects = [
    { 
        title: "Eu Digo X",
        category: "Full Stack",
        description: "Plataforma web para cálculo da síndrome do X Frágil e gerenciamento profissional para o instituto Buko Kaesemodel. ",
        icon: '<i class="fa-solid fa-stethoscope"></i>' + '<i class="fa-solid fa-xmark"></i>' , 
        link: 'https://github.com/HeitorASantos/XFragil-EC-BCC' 
    },
    { 
        title: "Todoo! - Sistema de Pendências",
        category: "Python",
        description: "Sistema para gerenciamento de tarefas com interface gráfica e banco de dados.",
        icon: '<i class="fa-solid fa-rectangle-list"></i>', 
        link: 'https://github.com/HeitorASantos/Todoo-gerenciador-de-pend-ncias-Terminal-Aplica-o-.-'
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
        link: 'https://github.com/HeitorASantos/Jogo-de-Damas-Java-'
    },
    { 
        title: "Banco de Dados",
        category: "SQL", description: "Modelagem, consultas SQL, relacionamentos e manipulação de dados.",
        icon: '<i class="fa-solid fa-database"></i>',
        link: 'https://github.com/HeitorASantos/Documenta-o-banco-de-dados-para-e-commerce-Trabalho-Facultativo-'
    },
    { 
        title: "Monitor de sistemas",
        category: "Python", 
        description: "Aplicação desenvolvida para mostrar dados estáticos e dinâmicos de software, hardware e rede.",
        icon: '<i class="fa-solid fa-computer"></i>' + '<i class="fa-solid fa-wifi"></i>'+ '<i class="fa-solid fa-gears"></i>',
        link: 'https://github.com/HeitorASantos/Monitor-de-Sistema-Python'
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
        icon: '<i class="fa-brands fa-linux"></i>' 
    },
    { 
        name: "Ubuntu/Lubuntu", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-ubuntu"></i>' 
    },
    { 
        name: "Fedora Linux", 
        level: "Intermediário", 
        icon: '<i class="fa-brands fa-fedora"></i>' 
    },
    { 
        name: "Kali Linux", 
        level: "Intermediário", 
        icon: '<i class="fa-solid fa-dragon"></i>' 
    }
];


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
            <button class="project-button">
                <a href="${p.link}" class="project-link" target="_blank" rel="noopener noreferrer">
                    Ver projeto ↗
                </a>
            </button>
            </div>
        </article>
        `;
    });


const originalCards = [...projectGrid.children];

originalCards.forEach(card => {
    projectGrid.appendChild(card.cloneNode(true));
});

let position = 0;
const speed = 0.5;

let paused = false;
let dragging = false;

let startX = 0;
let startPosition = 0;

let hasMoved = false;
const dragThreshold = 5;

function getCarouselWidth() {
    if (!originalCards.length) return 0;

    const cardWidth = originalCards[0].offsetWidth;
    const gap = 22;

    return (cardWidth + gap) * originalCards.length;
}

function normalizePosition() {
    const totalWidth = getCarouselWidth();

    if (!totalWidth) return;

    while (position <= -totalWidth) {
        position += totalWidth;
    }

    while (position > 0) {
        position -= totalWidth;
    }
}

function updateCarousel() {
    normalizePosition();

    projectGrid.style.transform = `translate3d(${position}px, 0, 0)`;
}

function animateCarousel() {
    if (!paused && !dragging) {
        position -= speed;
        updateCarousel();
    }

    requestAnimationFrame(animateCarousel);
}

const carousel = document.querySelector(".project-carousel");

if (carousel) {

    carousel.addEventListener("pointerdown", event => {

        if (event.target.closest("button")) return;

        dragging = true;
        paused = true;
        hasMoved = false;

        startX = event.clientX;
        startPosition = position;

        carousel.setPointerCapture(event.pointerId);
    });

    carousel.addEventListener("pointermove", event => {

        if (!dragging) return;

        const movement = event.clientX - startX;

        if (Math.abs(movement) > dragThreshold) {
            hasMoved = true;
        }

        position = startPosition + movement;

        updateCarousel();
    });

    function stopDragging(event) {

        if (!dragging) return;

        dragging = false;
        paused = false;

        normalizePosition();

        if (
            event &&
            carousel.hasPointerCapture(event.pointerId)
        ) {
            carousel.releasePointerCapture(event.pointerId);
        }
    }

    carousel.addEventListener("pointerup", stopDragging);

    carousel.addEventListener("pointercancel", stopDragging);

    carousel.addEventListener("lostpointercapture", () => {
        dragging = false;
        paused = false;
        normalizePosition();
    });


    carousel.addEventListener("click", event => {

        if (!hasMoved) return;

        event.preventDefault();
        event.stopPropagation();

        hasMoved = false;
    }, true);

    carousel.addEventListener("mouseenter", () => {
        if (!dragging) {
            paused = true;
        }
    });

    carousel.addEventListener("mouseleave", () => {
        if (!dragging) {
            paused = false;
        }
    });

    animateCarousel();
    }
}

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

const reveal = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("show");
    });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(e => reveal.observe(e));

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

const yearEl = document.getElementById("year");
if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
}

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

const navbar = document.querySelector(".navbar");
const navLinksContainer = document.getElementById("navLinks");
const menuButton = document.getElementById("menuButton");

if (menuButton && navLinksContainer) {
    menuButton.addEventListener("click", (e) => {
        e.stopPropagation();
        navLinksContainer.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
        if (!navLinksContainer.contains(e.target) && !menuButton.contains(e.target)) {
            navLinksContainer.classList.remove("active");
        }
    });
}

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
