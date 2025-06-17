const cvButton = document.querySelector(".btn-color-2")
cvButton.addEventListener("click", () => {
    window.open('/assets/other/cv.pdf')
})
const linkedIn = document.querySelector(".icon1")
linkedIn.addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/rasmus-carlsen-7592532b1")
})
const github = document.querySelector(".icon2")
github.addEventListener('click', () => {
    window.open("https://github.com/SpaceMasterCarlsen")
})

const contactMe = document.querySelector(".btn-color-1")
contactMe.addEventListener('click', () => {
    location.href="#contact"
})


const githubLink = document.querySelector("#github-links1");
githubLink.addEventListener("click", () => {
    window.open("https://github.com/lucasmodin/DmData-Frontend");
});

const githubLink2 = document.querySelector("#github-links2");
githubLink2.addEventListener("click", () => {
    window.open("https://github.com/lucasmodin/AlignPro");
});

const githubLink3 = document.querySelector("#github-links3");
githubLink3.addEventListener("click", () => {
    window.open("https://github.com/SpaceMasterCarlsen/BackendEksamen");
});

const githubLink4 = document.querySelector("#github-links4");
githubLink4.addEventListener("click", () => {
    window.open("https://github.com/SpaceMasterCarlsen/FrontendEksamen");
});

const websiteLink = document.querySelector("#website-links1");
websiteLink.addEventListener("click", () => {
    window.open("https://dmdatascience.dk/");
});

const projectLink = document.querySelector("#projects-link");
projectLink.addEventListener("click", () => {
    window.location.href = 'pages/projects.html';
});

//Skal slettes når mobile view er lavet, så den ikke driller :)
function checkIfMobile() {
    const warning = document.getElementById("mobile-warning");
    if (window.innerWidth <= 700) {
        warning.removeAttribute("hidden");
        warning.style.display = "flex"; // aktiver layout her
    } else {
        warning.setAttribute("hidden", true);
        warning.style.display = "none";
    }
}

//til min contactform"
function postForm() {
    const form = document.getElementById("contactform");
    const modal = document.getElementById("thanksModal");
    const closeModalBtn = document.getElementById("closeModalBtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const data = new FormData(form);

        fetch("https://formspree.io/f/xkgbznkq", {
            method: "POST",
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                form.reset();
                modal.style.display = "block";
            } else {
                alert("Der gik noget galt. Prøv igen.");
            }
        }).catch(error => {
            console.error("Error:", error);
            alert("Der opstod en fejl.");
        });
    });

    closeModalBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });
}