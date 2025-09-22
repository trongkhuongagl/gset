function updateHeightHeader() {
  const header = document.querySelector(".header");
  if (header) {
    const heightHeader = header.offsetHeight;
    document.body.style.setProperty("--heightHeader", `${heightHeader}px`);
  }
}
document.addEventListener("DOMContentLoaded", updateHeightHeader);
window.addEventListener("resize", updateHeightHeader);

const header = document.querySelector(".header");
if (header && window.ResizeObserver) {
  const observer = new ResizeObserver(updateHeightHeader);
  observer.observe(header);
}