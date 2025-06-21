document.querySelectorAll('.project-box').forEach(project => {
    const slides = project.querySelectorAll('.slides')
    const prevBtn = project.querySelector('.prev')
    const nextBtn = project.querySelector('.next')
    let currentIndex = 0

    function showSlide(index){
        slides.forEach((slides, i) => {
            slides.style.display = i === index ? 'block' : 'none'
        })
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length
        showSlide(currentIndex)
    })

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length
        showSlide(currentIndex)
    })

    showSlide(currentIndex)
})