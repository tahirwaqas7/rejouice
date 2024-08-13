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

  console.log(container.innerHTML);
});

let page1Content = document.querySelector(".page1-content");

let pointer = document.querySelector("#cursor");

page1Content.addEventListener("mousemove", (e) => {
  pointer.style.left = `${e.pageX}px`;
  pointer.style.top = `${e.y}px`;
});
