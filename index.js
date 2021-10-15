(function () {
  const houseEl = document.querySelector(".house");
  const progressbarEl = document.querySelector(".progress-bar");
  const stageEl = document.querySelector(".stage");
  const mousePosition = { x: 0, y: 0 };
  let maxScrollValue = document.body.offsetHeight - window.innerHeight;

  window.addEventListener("scroll", function (e) {
    const scrollPer = this.pageYOffset / maxScrollValue;
    const zMove = scrollPer * 980 - 490;

    houseEl.style.transform = "translateZ(" + zMove + "vw)";
    progressbarEl.style.width = scrollPer * 100 + "%";
  });

  function resizeHandler(e) {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener("resize", resizeHandler);

  window.addEventListener("mousemove", function (e) {
    mousePosition.x = e.clientX / (window.innerWidth / 2) - 1;
    mousePosition.y = (e.clientY / (window.innerHeight / 2) - 1) * -1;

    stageEl.style.transform =
      "rotateX(" +
      mousePosition.y * 5 +
      "deg) rotateY(" +
      mousePosition.x * 5 +
      "deg)";
  });
})();
