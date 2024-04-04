const questionButtons = document.querySelectorAll('.question-button');


questionButtons.forEach(button => {
    button.addEventListener('click', () => {

        const targetId = button.getAttribute('data-target');
        const response = document.getElementById(targetId);
        
        if (response.style.display === 'none') {
            response.style.display = 'block';
        } else {
            response.style.display = 'none';
        }
    });
});


function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      const targetOffset = targetElement.offsetTop;

    
      const offset = 100;
      const scrollToPosition = targetOffset - offset;

      window.scrollTo({
          top: scrollToPosition,
          behavior: 'smooth'
      });
  });
});


const carousel = document.getElementById('carousel');
const track = carousel.querySelector('.carousel-track');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
let itemWidth = items[0].offsetWidth;
let isPaused = false;
let intervalId;

function nextSlide() {
    if (!isPaused) {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarousel();
    }
}

function updateCarousel() {
    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
}

function togglePause() {
    isPaused = !isPaused;
}


window.addEventListener('resize', () => {
    itemWidth = items[0].offsetWidth;
    updateCarousel();
});


intervalId = setInterval(nextSlide, 3000); 


carousel.addEventListener('click', togglePause);


items.forEach((item, index) => {
    item.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});



