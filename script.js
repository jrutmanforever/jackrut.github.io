const bannerCards = document.querySelectorAll('.banner-card');
let currentCardIndex = 0;

function showNextCard() {
  bannerCards[currentCardIndex].classList.remove('active');
  currentCardIndex = (currentCardIndex + 1) % bannerCards.length;
  bannerCards[currentCardIndex].classList.add('active');
}

// Hide all banner cards except the first one
for (let i = 1; i < bannerCards.length; i++) {
  bannerCards[i].classList.remove('active');
}

// Start the banner rotation after a delay
setTimeout(function() {
  showNextCard();
  setInterval(showNextCard, 5000);
}, 500);
