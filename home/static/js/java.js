let img = document.querySelector(".img");
let container = document.querySelector(".p1container");
let det = document.querySelector(".p1details");
let cap = document.getElementById("caption");

// page courses open and colse table and scroll to table element and course element
let thetabledev = document.querySelector(".thetable");
const element = document.getElementById("table");

// function to close the table display in cource page
function closeit() {
   thetabledev.style.display = "none";
   const element = document.getElementById("course1");
   element.scrollIntoView();
}

// function to show the table in cource page
function showtable() {
  thetabledev.style.display = "block";
  element.scrollIntoView();
}

// function to change caption and details about each emage in page organic candels
function choice(src, alt, color) {
  img.src = src;
  container.style.background = color;
  if (alt == "2") {
    cap.innerHTML = "Orange Blossom ";
    det.innerHTML =
      " Clementine flower sparkles over a heart of orange blossom and water lily, with warm undertones of orris and balsamic vetiver.";
  } else if (alt == "3") {
    cap.innerHTML = "Lime Basil & Mandarin ";
    det.innerHTML =
      " Peppery basil and aromatic white thyme bring an unexpected twist to the scent of limes on a Caribbean breeze.";
  } else if (alt == "4") {
    cap.innerHTML = "Peony & Blush Suede ";
    det.innerHTML =
      "Featuring a blend of French flowers, red apple, jasmine and flower jelly.";
  } else if (alt == "5") {
    cap.innerHTML = "Red Roses";
    det.innerHTML =
      "A voluptuous blend of seven of the world's most exquisite roses. With crushed violet leaves and a hint of lemon. ";
  } else if (alt == "8") {
    cap.innerHTML = "Lilac Blossoms";
    det.innerHTML =
      "An alluring grove of lavender, white and deep purple lilacs.";
  } else {
    cap.innerHTML = "Wild Bluebell ";
    det.innerHTML =
      "A combination of roses scented with lemon, orange peel, and ginger.";
  }
}

// function to display aslide of emages  in smoothie page
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// function to close  aslide of emages  in smoothie page
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// function to move slides nex
var slideIndex = 1;
showSlides(slideIndex);

// function to move slides to the end
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// function to move slides the first
function currentSlide(n) {
  showSlides((slideIndex = n));
}

// function to move slides previous
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}


 function openModal() {
   document.getElementById("myModal").style.display = "block";
 }
 
 function closeModal() {
   document.getElementById("myModal").style.display = "none";
 }
 
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
   var dots = document.getElementsByClassName("demo");
   var captionText = document.getElementById("caption");
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
   captionText.innerHTML = dots[slideIndex-1].alt;
 }
