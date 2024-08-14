document.addEventListener("DOMContentLoaded", () => {
  const text = "rejouice";
  const container = document.getElementById("heroText");

  const html = text
    .split("")
    .map(
      (char, index) =>
        `<span class="char char-${index}" data-index="${index}">${char}</span>`
    )
    .join("");

  container.innerHTML = html;
});

let heroContent = document.querySelector(".page1-content");

let cursor = document.querySelector("#cursor");

heroContent.addEventListener("mousemove", (mouse) => {
  gsap.to(cursor, {
    x: mouse.x,
    y: mouse.y,
  });
});

const handleCursor = ({ type }) => {
  gsap.to(cursor, {
    opacity: type === "mouseenter" ? 1 : 0,
    scale: type === "mouseenter" ? 1 : 0,
  });
};

heroContent.addEventListener("mouseenter", handleCursor);
heroContent.addEventListener("mouseleave", handleCursor);
