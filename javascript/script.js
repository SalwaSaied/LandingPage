function callUs() {  
    alert("Call us at +1 2345 3456 45");  
}
document.querySelectorAll('.nav-item').forEach(item => {  
    item.addEventListener('click', function() {  
        // Remove 'active' class from all nav items  
        document.querySelectorAll('.nav-item').forEach(nav => {  
            nav.classList.remove('active');  
        });  
        // Add 'active' class to the clicked nav item  
        this.classList.add('active');  
    });  
}); 

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


document.querySelector('.nav-toggle').addEventListener('click', function() {  
  document.querySelector('.nav-container').classList.toggle('active');  
}); 