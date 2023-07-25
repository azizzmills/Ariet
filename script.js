const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let currentIndex = 0;

function showSlide(index) {
  const slideWidth = slides[0].offsetWidth;
  carousel.style.transform = `translateX(-${slideWidth * index}px)`;
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
});

// Show the initial slide (Slide 1)
showSlide(currentIndex);

// Function to move to another page
function moveToAnotherPage() {
  // Change the location to the desired URL of the other page
  window.location.href = "Ending.html";
}