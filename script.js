const SECRET = "Bangaram";

function unlock() {
  const input = document.getElementById("codeInput").value;

  if (input === SECRET) {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("scene").classList.remove("hidden");
    document.getElementById("bgMusic").play();
    startHearts();
    setTimeout(fireworks, 6000);
  } else {
    document.getElementById("error").innerText = "Wrong secret 💔";
  }
}

/* FLOATING HEARTS */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("img");
    heart.src = "heart.png";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 6000);
  }, 400);
}

/* FIREWORKS */
function fireworks() {
  for (let i = 0; i < 30; i++) {
    const spark = document.createElement("div");
    spark.style.position = "absolute";
    spark.style.width = "6px";
    spark.style.height = "6px";
    spark.style.borderRadius = "50%";
    spark.style.background = "gold";
    spark.style.left = "50%";
    spark.style.top = "50%";
    document.body.appendChild(spark);

    const x = (Math.random() - 0.5) * 400;
    const y = (Math.random() - 0.5) * 400;

    spark.animate([
      { transform: "translate(0,0)", opacity: 1 },
      { transform: `translate(${x}px, ${y}px)`, opacity: 0 }
    ], { duration: 1200 });

    setTimeout(() => spark.remove(), 1200);
  }
}

/* MOBILE SWIPE PAGE TURN */
let startX = 0;
document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
document.addEventListener("touchend", e => {
  if (startX - e.changedTouches[0].clientX > 50) {
    document.querySelector(".page1").style.transform = "rotateY(-180deg)";
  }
});
