import "./style.css"; // Vite handles inserting CSS
// Common pattern is to put JS source files in src/
import { setupVideo, takePhoto } from "./src/camera.js";

const button = document.querySelector("#take-photo");
const closeModalButton = document.querySelector("#closeModal");
const saveImageButton = document.querySelector("#saveImage");
const canvas = document.querySelector("canvas");
const modal = document.getElementById('modal');
const capturedImage = document.getElementById('capturedImage');

const video = await setupVideo();

video.addEventListener('timeupdate', async () => {
  function drawFrame() {
      // Draw the current frame on the canvas
      takePhoto(video, canvas);
      // Repeat the process for the next frame
      requestAnimationFrame(drawFrame);
  }
  // Start drawing frames
  drawFrame();
})

button.addEventListener("click", () => {
  video.pause();

  // Display the captured image in the modal
  capturedImage.src = canvas.toDataURL('image/png');
  modal.style.display = 'flex';

});

closeModalButton.addEventListener("click", () => {
  video.play();

  // Hide the modal
  modal.style.display = 'none';

});

saveImageButton.addEventListener("click", () => {
  
  // Create a temporary link element
  const link = document.createElement('a');
  link.href = capturedImage.src;
  link.download = 'captured_image.png';

  // Simulate a click on the link to trigger the download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

});
