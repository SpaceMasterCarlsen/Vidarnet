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
    window.open("https://github.com/SpaceMasterCarlsen");
});

const websiteLink = document.querySelector("#website-links1");
websiteLink.addEventListener("click", () => {
    window.open("https://dmdatascience.dk/");
});