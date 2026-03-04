export default function videoPlayer() {
  const players = document.querySelectorAll(".video-player");

  if (players.length) {
    players.forEach((player) => {
      const video = player.querySelector(".video");
      const btnPlay = player.querySelector(".btn-play");

      player.addEventListener("click", () => {
        if (player.classList.contains("_active")) {
          player.classList.remove("_active");

          video.pause();

          if (btnPlay) {
            btnPlay.classList.remove("_active");
          }
        } else {
          player.classList.add("_active");

          if (!video.src) {
            video.src = video.dataset.src;
          }
          video.play();

          if (btnPlay) {
            btnPlay.classList.add("_active");
          }
        }
      });

      video.addEventListener("ended", () => {
        player.classList.remove("_active");
        video.pause();
        if (btnPlay) {
          btnPlay.classList.remove("_active");
        }
      });
    });
  }
}
