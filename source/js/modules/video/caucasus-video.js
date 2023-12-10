const posterElement =
document.querySelector('[data-caucasus-video-poster]');
const videoPlayButtonElement = document.querySelector('[data-caucasus-video-play-button]');
const videoElement = document.querySelector('[data-caucasus-video]');

const onButtonVideoPlayClick = () => {
  if (videoElement) {
    posterElement.classList.add('isClose');
    videoPlayButtonElement.classList.add('isClose');
    videoElement.innerHTML = '<iframe src="https://www.youtube.com/embed/9TZXsZItgdw?autoplay=1" loading="lazy" width="482" height="317" frameborder="0"  allow="autoplay" allowfullscreen></iframe>';
  }
};

const setVideoPlayButtonListener = () => {
  videoPlayButtonElement.addEventListener('click', onButtonVideoPlayClick);
};

export {setVideoPlayButtonListener};
