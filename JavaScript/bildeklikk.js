const thumbs = document.getElementsByClassName('bilderclass');
const overlay = document.getElementById('overlay');
const overlayImage = overlay.querySelector('img');

for (let i = 0; i < thumbs.length; i++) {
  thumbs[i].addEventListener('click', function () {
    overlayImage.src = this.src;
    overlayImage.id = this.id || "";  // Copy the clicked image's ID if any
    overlay.style.display = 'flex';

    // Request fullscreen
    if (overlay.requestFullscreen) {
      overlay.requestFullscreen();
    } else if (overlay.webkitRequestFullscreen) {
      overlay.webkitRequestFullscreen();
    } else if (overlay.msRequestFullscreen) {
      overlay.msRequestFullscreen();
    }
  });
}

overlay.addEventListener('click', function (e) {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    overlayImage.src = '';
    overlayImage.id = '';  // Clear ID on close

    // Exit fullscreen
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }
});
