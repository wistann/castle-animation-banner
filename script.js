const frames = document.querySelectorAll(".frame");
const timings = [2000, 2800, 3000, 3500]; // milliseconds for each frame
let current = 0;

function showFrame(index) {
  frames.forEach((frame, i) => {
    frame.classList.toggle("active", i === index);
  });
}

function advanceFrame() {
  showFrame(current);
  const delay = timings[current];
  current = (current + 1) % frames.length;
  setTimeout(advanceFrame, delay);
}

advanceFrame();