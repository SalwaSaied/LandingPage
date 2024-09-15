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







// Select the nav toggle button and the navigation menu  
const navToggle = document.querySelector('.nav-toggle');  
const nav = document.querySelector('.nav');  
const call = document.querySelector(".call")

// Add an event listener to the nav toggle button  
navToggle.addEventListener('click', () => {  
    // Toggle 'active' class on the navigation to show/hide it  
    nav.classList.toggle('active');  

    // Optional: Change the toggle button appearance when the menu is active  
    if (nav.classList.contains('active')) {  
        navToggle.textContent = '☰'; // Change icon to close icon  
    } else {  
        navToggle.textContent = '☰'; // Change back to the menu icon  
    }  
});  

// Close the navigation when clicking outside  
document.addEventListener('click', (event) => {  
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {  
        nav.classList.remove('active'); // Hide navigation  
        navToggle.textContent = '☰ '; // Reset button text  
    }  
});

function myFunction() {
  if (nav.style.display === "block") {
    nav.style.display = "none";
    call.style.display = "block";
    
  } else {
    nav.style.display = "block";
    call.style.display = "none";

  }
}