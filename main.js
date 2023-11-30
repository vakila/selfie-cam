import "./style.css"; // Vite handles inserting CSS
// Common pattern is to put JS source files in src/
import { setupVideo, takePhoto } from "./src/camera.js";

(async function run() {
  const button = document.querySelector("#take-photo");
  const canvas = document.querySelector("canvas");
  const video = await setupVideo();

  button.addEventListener("click", () => {
    takePhoto(video, canvas);
  });
})();
