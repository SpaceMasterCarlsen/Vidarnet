document.addEventListener("DOMContentLoaded", script);

function script() {
    const basePath = window._env_?.BASE_PATH || "";

    loadComponent(basePath + "pages/header-footer/header.html", "header-container", loadNavLogic);
    loadComponent(basePath + "pages/header-footer/footer.html", "footer-container");
}

function loadComponent(url, containerID, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Could not load ${url}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const container = document.getElementById(containerID);
            if (!container) throw new Error(`Container with id ${containerID} not found.`);
            container.innerHTML = data;
            if (callback) requestAnimationFrame(callback);
        })
        .catch(error => console.error(error));
}

function loadNavLogic() {
    const basePath = window._env_?.BASE_PATH || "";

    const index = document.getElementById('index');
    const index2 = document.getElementById('index2');
    const index3 = document.getElementById('index3');
    const projects = document.getElementById('projects');
    const projects2 = document.getElementById('projects2');
    const services = document.getElementById('services');
    const services2 = document.getElementById('services2');
    const contact = document.getElementById('contact');
    const contact2 = document.getElementById('contact2');

    if (index) {
        index.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "index.html";
        });
    }
    if (index2) {
        index2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "index.html";
        });
    }
    if (index3) {
        index3.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "index.html";
        });
    }
    if (projects) {
        projects.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "pages/projects.html";
        });
    }
    if (projects2) {
        projects2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "pages/projects.html";
        });
    }
    if (services) {
        services.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "pages/services.html";
        });
    }
    if (services2) {
        services2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "pages/services.html";
        });
    }
    if (contact) {
        contact.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "index.html#contact-section";
        });
    }
    if (contact2) {
        contact2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = basePath + "index.html#contact-section";
        });
    }

    // Hamburger menu
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    const menu = document.querySelector(".menu-links");

    if (hamburgerIcon && menu) {
        hamburgerIcon.addEventListener("click", () => {
            menu.classList.toggle("open");
            hamburgerIcon.classList.toggle("open");
        });
    }

    checkIfMobile();
    postForm();
}
