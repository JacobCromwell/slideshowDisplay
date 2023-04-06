"use strict";

window.onload = displaySlideShow; 

// Define an array of slide show image data
var slideShowImages = [
  { src: "images/Brushka.png", text: "I happened first", duration: 4 },
  { src: "images/Tanuki_racoon.png", text: "Then I happened for awhile", duration: 2 },
  { src: "images/RedCat.png", text: "And then I ended it", duration: 6 },
];

// Define a function to display the slide show
function displaySlideShow() {
  console.log("inside displaySlideShow");
  // Get the HTML elements for the image and text
  var imageElement = document.getElementById("image");
  var textElement = document.getElementById("text");
  // Define a variable to keep track of the current image index
  var currentIndex = 0;
  // Define a function to show the next image in the slide show
  function showNextImage() {
    console.log("inside showNextImage");
    // Get the slide show image data for the current index
    var currentSlide = slideShowImages[currentIndex];
    // Set the image source and text
    imageElement.src = currentSlide.src;
    textElement.textContent = currentSlide.text;
    // Increment the current index and loop back to the beginning if necessary
    currentIndex = (currentIndex + 1) % slideShowImages.length;
    // Call this function again after the specified duration
    setTimeout(showNextImage, currentSlide.duration * 1000);
  }
  // Start the slide show
  showNextImage();
}
