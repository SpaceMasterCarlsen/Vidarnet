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


document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slides');

    slides.forEach(slide => {
        slide.addEventListener('click', () => {
            const media = slide.querySelector('video, img');
            if(media instanceof HTMLVideoElement){
                return
            }
            if (media) {
                if (media.requestFullscreen) {
                    media.requestFullscreen();
                } else if (media.webkitRequestFullscreen) {
                    media.webkitRequestFullscreen();
                } else if (media.msRequestFullscreen) {
                    media.msRequestFullscreen();
                }
            }
        });
    });
});