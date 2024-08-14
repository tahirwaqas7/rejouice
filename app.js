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

const cursorEffect = () => {
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
};

cursorEffect();


gsap.from(".header .left span, .contents p",{
  y:120,
  stagger : 0.2,
  duration :1,
  scrollTrigger :{
      trigger : ".page2",
      scroller : ".main", 
      scrub : 4,
      start :"top 100%",
      end :"top 46%"
  }
})
