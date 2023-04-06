// Define an interface for slide show image data
interface SlideShowImage {
  src: string; // Image file path or URL
  text: string; // Text to display underneath the image
  duration: number; // Time in seconds to show the image
}

// Define an array of slide show image data
const slideShowImages: SlideShowImage[] = [
  { src: '../public/images/Brushka.png', text: 'I happened first', duration: 5 },
  { src: '../public/images/Tanuki_racoon.png', text: 'Then I happened for awhile', duration: 10 },
  { src: '../public/images/RedCat.png', text: 'And then I ended it', duration: 3 }
];

// Define a function to display the slide show
export function displaySlideShow(): void {
  console.log("inside displaySlideShow");
  // Get the HTML elements for the image and text
  const imageElement = document.getElementById('image') as HTMLImageElement;
  const textElement = document.getElementById('text') as HTMLParagraphElement;

  // Define a variable to keep track of the current image index
  let currentIndex = 0;

  // Define a function to show the next image in the slide show
  function showNextImage(): void {
    console.log("inside showNextImage");
    // Get the slide show image data for the current index
    const currentSlide = slideShowImages[currentIndex];

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
