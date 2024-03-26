window.addEventListener('load', function () {
  const preloader = document.querySelector('.js-preloader');
  preloader.classList.remove('loaded');
  setTimeout(function () {
    preloader.classList.add('loaded');
  }, 1000);
});