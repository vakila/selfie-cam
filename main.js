import "./style.css"; // Vite handles inserting CSS
// Common pattern is to put JS source files in src/
import { setupCounter } from "./src/counter.js";

setupCounter(document.querySelector("#counter"));
