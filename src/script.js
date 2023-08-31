// script.js
const video = document.querySelector(".video-layout");

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function playVideoOnScroll() {
  if (isElementInViewport(video)) {
    // Check if the video is already playing or paused
    if (video.paused) {
      video.play();
    }
  } else {
    video.pause();
    // Reset the playback position to the beginning when the video goes out of view
    video.currentTime = 0;
  }
}

// Check for video play/pause on scroll and resize events
document.addEventListener("scroll", playVideoOnScroll);
window.addEventListener("resize", playVideoOnScroll);

// Play the video when the page loads, in case it's already in view
playVideoOnScroll();
