document.addEventListener("DOMContentLoaded", script);

function script() {
    const basePath = getComponentBasePath();
    loadComponent(basePath + "header.html", "header-container", loadNavLogic);
    loadComponent(basePath + "footer.html", "footer-container");
}

function getComponentBasePath() {
    const path = window.location.pathname;
    if (path.includes("/pages/")) {
        return "header-footer/";
    }
    return "pages/header-footer/";
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
    const index = document.getElementById('index');
    const index2 = document.getElementById('index2');
    const index3 = document.getElementById('index3');
    const projects = document.getElementById('projects');
    const projects2 = document.getElementById('projects2');
    const about = document.getElementById('about');
    const about2 = document.getElementById('about2');
    const contact = document.getElementById('contact');
    const contact2 = document.getElementById('contact2');

    if (index) {
        index.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/index.html";
        });
    }
    if (index2) {
        index2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/index.html";
        });
    }
    if (index3) {
        index3.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/index.html";
        });
    }
    if (projects) {
        projects.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/projects.html";
        });
    }
    if(projects2){
        projects2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/projects.html";
        });
    }
    if (about) {
        about.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/about.html";
        });
    }
    if(about2){
        about2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/about.html";
        });
    }
    if (contact) {
        contact.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/contact.html";
        });
    }
    if(contact2){
        contact2.addEventListener('click', e => {
            e.preventDefault();
            window.location.href = "/vidarnet/pages/contact.html";
        });
    }

    const hamburgerIcon = document.querySelector(".hamburger-icon")
    const menu = document.querySelector(".menu-links")

    function toggleMenu(){
        menu.classList.toggle("open")
        hamburgerIcon.classList.toggle("open")
    }
    hamburgerIcon.addEventListener("click", toggleMenu)
}




