const year = document.getElementById("year");
year.textContent = new Date().getFullYear();

const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

const video = document.querySelector(".video-frame video");
const placeholder = document.querySelector(".video-placeholder");
if (video && placeholder) {
  video.addEventListener("loadeddata", () => {
    placeholder.style.opacity = "0";
    placeholder.style.visibility = "hidden";
  });
  video.addEventListener("error", () => {
    placeholder.style.opacity = "1";
    placeholder.style.visibility = "visible";
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => {
    document.body.classList.remove("menu-open");
  });
});
