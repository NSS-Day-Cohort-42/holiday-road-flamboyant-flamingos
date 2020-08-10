// let i = 0; //start of the index 
// const images = []
// const time = 5000 //time in ms 

// images[0] = './images/backgroundImages/kidNationalPark.jpg';
// images[1] = './images/backgroundImages/ladyNationalPark.jpg';
// images[2] = './images/backgroundImages/MomChildBackground.jpg';


// export const changeImage = () => { 
//     document.slide.src = images[i];

//     if (i < images.length - 1){
//         i++;
//     } else {
//         i = 0;
//     }

//     setTimeout("changeImage()", time)
// }

// window.onload = changeImage;

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
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}