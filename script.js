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



