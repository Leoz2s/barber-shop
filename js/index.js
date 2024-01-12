import { Router } from "./router.js";

const router = new Router();

router.addRoute("/", "/pages/home.html");
router.addRoute("/booking", "/pages/booking.html");
router.addRoute(404, "/pages/404.html");

router.switchPage();

window.onpopstate = () => router.handle();

document.querySelector("nav a:nth-child(1)").addEventListener("click", () => router.route());


// const whatsAppButton = document.querySelector("#whatsapp-button");
// const instagramButton = document.querySelector("#whatsapp-button");

// whatsAppButton.addEventListener("click", clickReaction);
// instagramButton.addEventListener("click", clickReaction);

// function clickReaction() {
//   console.log("Hello!");
// };