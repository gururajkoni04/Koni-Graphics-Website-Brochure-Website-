var modal = document.getElementById('myModal');

window.addEventListener('click', outsideClick);

// Open the Modal
function openModal() {
    modal.style.display = "block";
  }
  
  // Close the Modal
  function closeModal() {
    modal.style.display = "none";
  }

  // outside click
  function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
  }