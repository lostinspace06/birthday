function showMessage() {
  document.getElementById("hiddenMessage").style.display = "block";
  launchConfetti();
}

function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 6,
      angle: 60,
      spread: 100,
      origin: { x: 0 }
    });
    confetti({
      particleCount: 6,
      angle: 120,
      spread: 100,
      origin: { x: 1 }
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  })();
}

// Slideshow logic
let slides = document.querySelectorAll('.slide');
let current = 0;

function showNextSlide() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

slides[0].classList.add('active');
setInterval(showNextSlide, 4000);