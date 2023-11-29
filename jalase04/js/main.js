const $ = document;
const videoSrc = $.querySelectorAll('.video-Src');
var video01=document.getElementById("volume1");
const Video = $.querySelector(".video");
const playBtn = $.querySelector(".btn-play");
const btnSpeed = $.querySelector(".btn-speed");
const btnSpeedLess = $.querySelector(".btn-speedLess");
const btnPrev = $.querySelector(".btn-prev");
const btnNext = $.querySelector(".btn-next");
const videoBox  = $.querySelector(".video-box")
window.addEventListener("resize", function () {
  if (this.window.innerWidth < 700) {
                        let data = playBtn.getAttribute("data-icon");
                        if (data == "play") {
                          Video.play();
                          playBtn.removeAttribute("src");
                          playBtn.setAttribute("src", "./icons/pause.png");
                          playBtn.setAttribute("data-icon", "pause");
                          data = playBtn.getAttribute("data-icon");
                        } else if (data == "pause") {
                          Video.pause();
                          playBtn.removeAttribute("src");
                          playBtn.setAttribute("src", "./icons/play.png");
                          playBtn.setAttribute("data-icon", "play");
                          data = playBtn.getAttribute("data-icon");
                        }
  }
});
function btnplay() {
  let data = playBtn.getAttribute("data-icon");
  if (data == "play") {
    Video.play();
    playBtn.removeAttribute("src");
    playBtn.setAttribute("src", "./icons/pause.png");
    playBtn.setAttribute("data-icon", "pause");
    data = playBtn.getAttribute("data-icon");
  } else if (data == "pause") {
    Video.pause();
    playBtn.removeAttribute("src");
    playBtn.setAttribute("src", "./icons/play.png");
    playBtn.setAttribute("data-icon", "play");
    data = playBtn.getAttribute("data-icon");
  }
}
function btnforward() {
  video01.currentTime+=15;
}
function btnback() {
  video01.currentTime-=15;
}
btnSpeed.addEventListener("click", btnforward);
btnSpeedLess.addEventListener("click", btnback);
playBtn.addEventListener("click", btnplay);


