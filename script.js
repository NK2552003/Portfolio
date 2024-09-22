// Change opacity of .back after 5 seconds
gsap.to(".back", {
  opacity: 1, // Change opacity to 1 (fully visible)
  duration: 1.5, // Transition duration
  delay: 5, // Delay of 5 seconds
  ease: "power2.out", // Optional easing
});

//twinkling stars

(() => {
  const max_stars = 200;
  const stars = [];
  const starContainer = document.getElementById("starCont");

  for (let i = 0; i < max_stars; i++) {
    const star = document.createElement("span");
    const size = Math.floor(Math.random() * 3) + 1;
    star.className = "star";
    star.style.width = size + "px";
    star.style.height = size + "px";
    star.style.background = `rgba(255, 255, 177, ${Math.random()})`;
    star.style.top = Math.ceil(Math.random() * 100) + "%";
    star.style.left = Math.ceil(Math.random() * 100) + "%";
    stars.push(star);
    starContainer.appendChild(star);
  }

  for (let j = 0; j < max_stars * 0.6; j++) {
    const star = stars[j];
    star.style.animationName = "glow";
    star.style.animationDelay = Math.floor(Math.random() * 6) + 1 + "s";
    star.style.animationDuration = Math.floor(Math.random() * 6) + 1 + "s";
  }
})();

//cursor movement

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOut = document.querySelector("[data-cursor-outline]");

let timeout; // Define timeout at the correct scope

window.addEventListener("mousemove", function (e) {
  let posX = e.clientX;
  let posY = e.clientY;

  // Move the cursor dot and outline
  cursorDot.style.left = posX + "px";
  cursorDot.style.top = posY + "px";

  cursorOut.style.left = posX + "px";
  cursorOut.style.top = posY + "px";

  // Ensure both cursors are visible
  cursorDot.style.display = "block";
  cursorOut.style.display = "block";

  // Clear any previous timeout to prevent immediate hiding
  clearTimeout(timeout);

  // Start a new timeout to hide the cursor after 1 second of inactivity
  timeout = setTimeout(() => {
    cursorDot.style.display = "none";
    cursorOut.style.display = "none";
  }, 1000);
});

// Hide the cursor when the mouse leaves the window
document.addEventListener("mouseout", () => {
  cursorOut.style.display = "none";
  cursorDot.style.display = "none";
});
//scroll to top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
