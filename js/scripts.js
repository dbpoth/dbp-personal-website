// reg to mobile menu in phone mode

function toggleMobileMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


const images = document.querySelectorAll('.stacked-carousel img');
let currentIndex = 0;

function updateStack() {
  images.forEach((img, i) => {
    img.classList.remove('active', 'next');

    if (i === currentIndex) {
      img.classList.add('active');
    } else if (i === (currentIndex + 1) % images.length) {
      img.classList.add('next');
    }
  });
}

images.forEach(img => {
  img.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateStack();
  });
});

updateStack();