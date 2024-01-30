document.addEventListener("DOMContentLoaded", function () {
  var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
      slideIndex = 1;
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 2000); // Change slide every 2 seconds
  }
});


document.addEventListener("DOMContentLoaded", function () {

  var slideIndex = {
    regalSlides: 1,
    sophisticateSlides: 1,
    prestigeSlides: 1,
  };

  
  showSlides("regalSlides", slideIndex.regalSlides);
  showSlides("sophisticateSlides", slideIndex.sophisticateSlides);
  showSlides("prestigeSlides", slideIndex.prestigeSlides);

  
  function showSlides(slidesClassName, n) {
    var i;
    var slides = document.getElementsByClassName(slidesClassName);

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex[slidesClassName] += n;

    if (slideIndex[slidesClassName] > slides.length) {
      slideIndex[slidesClassName] = 1;
    }

    if (slideIndex[slidesClassName] < 1) {
      slideIndex[slidesClassName] = slides.length;
    }

    slides[slideIndex[slidesClassName] - 1].style.display = "block";
  }

  
  window.plusSlides = function (n, slidesClassName) {
    showSlides(slidesClassName, n);
  };
});

document.addEventListener('DOMContentLoaded', function () {
  
  var makeHomeButton = document.getElementById('makeHomeButton');

  
  var modal = document.getElementById('myModal');

  
  var closeBtn = modal.querySelector('.close');

  function showModal() {
    modal.style.display = 'block';
    document.body.classList.add('modal-open');
  }

  function hideModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
  }

  makeHomeButton.addEventListener('click', function () {

    showModal();
  });

  
  closeBtn.addEventListener('click', function () {
    hideModal();
  });

  
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      hideModal();
    }
  });
});
function commenceJourney() {
  
  closeModal();


  document.getElementById('services').scrollIntoView({
      behavior: 'smooth'
  });
}

