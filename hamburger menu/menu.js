const hamburgerBtn = document.querySelector('.hamburger-button');
hamburgerBtn.addEventListener('click', event => {
  event.preventDefault();
  console.log('hamburger button clicked');
  hamburgerBtn.classList.toggle('active');

  const overlay = document.querySelector('.overlay');
  overlay.classList.toggle('visible');
})
