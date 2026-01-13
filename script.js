/* ================= AUDIO ================= */

const bgMusic = document.getElementById("bgMusic");
const clickSound = document.getElementById("clickSound");

let currentMood = "";
let lastMood = "";
let sadLonelyCount = 0;

// First tap unlocks audio + app
document.getElementById("intro").addEventListener("click", () => {
  bgMusic.volume = 0.4;
  bgMusic.play().catch(() => {});
  document.getElementById("intro").classList.remove("active");
  document.getElementById("app").classList.add("active");
});

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}

/* ================= MESSAGES ================= */

const messages = {
  sad: [
    "It’s okay. I’m right here. Take 3 slow breaths.",
    "You don’t have to fix anything right now. Drink some water.",
    "Even stars need rest sometimes.",
    "You’re allowed to feel this. Call me if it feels overwhelming",
    "Be gentle with yourself. Please take care of my baby",
    "This won’t last forever. I promise."
  ],
  happy: [
    "You shine so naturally. I am in awe.",
    "Hold onto this feeling. Do a tiny dance (send me it as well)",
    "Your smile changes rooms. I need to see it, NOW",
    "You deserve joy like this. YOU DESERVE THE BEST",
    "Laugh a little louder. Send me your laugh baby",
    "This is your moment. Write/Record this abhi"
  ],
  romantic: [
    "You feel like poetry. I don't know any, but i can just feel the beauty",
    "Love looks soft on you. i can't wait for you to be mine",
    "Someone is lucky to know you. that someone is me",
    "You glow differently. i am blinded by your light",
    "This warmth suits you.",
    "You’re a feeling. and i would never want to lose this feeling"
  ],
  lonely: [
    "You’re not invisible.",
    "I see you.",
    "Quiet doesn’t mean empty.",
    "You still matter.",
    "You’re doing your best.",
    "You’re held, even now."
  ],
  weird: [
    "Aap jaisi bhi ho, i really really like you",
    "This is kind of fun actually.",
    "Nothing is broken.",
    "Lean into it.",
    "You’re very you right now.",
    "Let the weird pass."
  ],
  lazy: [
    "Rest is productive.",
    "You don’t need to rush.",
    "Slow days count.",
    "Doing less is okay.",
    "Pause without guilt.",
    "Be soft today."
  ],
  bored: [
    "Aao kuch mast sa dekhte hai",
    "would you like to listen to some cutu music together?",
    "go out for a walk",
    "kuch crazy sa scenario socho, something that you would want to see in a movie. record that and send it to me",
    "saath mei kuch khele?",
    "chatpate gaano ke saath my chatpati baby is the way to go"
  ]
};

/* ================= COMFORT MODE ================= */

const comfortMessages = [
  "Baby. come here 🫂",
  "You don’t need to roll the dice right now if you don't want to",
  "I know it’s heavy.",
  "You’re not alone in this.",
  "Let’s just sit together for a moment."
];

/* ================= PLAYLISTS ================= */

const playlists = {
  sad: "https://open.spotify.com/playlist/1nAFuLv3VOaQ85D7BlVJj5?si=47113d60f0f6451b",
  happy: "https://open.spotify.com/playlist/1ZKdvf5yXvwVyzgznVz2Nl?si=626282bbd79b42fb",
  romantic: "https://open.spotify.com/playlist/5cfIZWLbFP5bn9C7UfxLbI?si=78530bb88b654262",
  lonely: "https://open.spotify.com/playlist/6F8jONJp5wFSSm5lrREnLU?si=6668581cd733438b",
  weird: "https://open.spotify.com/playlist/2O2gI8y6F7MElaCYL4xtiq?si=5f04f787d57b416e&pt=dd6c52a6e37ff1c355d2eebb4fb285e3",
  lazy: "https://open.spotify.com/playlist/1Zuzm0JL8Z79CP5eyRSmCf?si=4596483bc89840d7",
  bored: "https://open.spotify.com/playlist/1DatcBStkkmYNY6KKvPbv4?si=b537c6d5e9454bfc"
};

/* ================= APP LOGIC ================= */

function selectMood(mood) {
  playClick();

  // Comfort mode logic
  if (mood === lastMood && (mood === "sad" || mood === "lonely")) {
    sadLonelyCount++;
  } else {
    sadLonelyCount = 1;
  }

  lastMood = mood;
  currentMood = mood;

  document.body.className = mood;
  document.getElementById("moods").classList.add("hidden");
  document.getElementById("diceScreen").classList.remove("hidden");
  document.getElementById("playlistLink").href = playlists[mood];

  if (sadLonelyCount >= 2 && (mood === "sad" || mood === "lonely")) {
    showComfortMode();
  } else {
    rollDiceWithDelay();
  }
}

/* ================= DICE + DELAY ================= */

function rollDiceWithDelay() {
  const dice = document.getElementById("dice");
  const messageBox = document.getElementById("message");

  messageBox.innerText = "";
  dice.style.animation = "none";
  dice.offsetHeight;
  dice.style.animation = "roll 1s ease";

  setTimeout(() => {
    const moodMessages = messages[currentMood];
    const randomIndex = Math.floor(Math.random() * moodMessages.length);
    messageBox.innerText = moodMessages[randomIndex];
  }, 1000); // message AFTER roll
}

function rollAgain() {
  playClick();
  rollDiceWithDelay();
}

/* ================= COMFORT MODE DISPLAY ================= */

function showComfortMode() {
  const dice = document.getElementById("dice");
  const messageBox = document.getElementById("message");

  dice.innerText = "🫂";
  dice.style.animation = "none";

  const randomComfort =
    comfortMessages[Math.floor(Math.random() * comfortMessages.length)];

  messageBox.innerText = randomComfort;
}

/* ================= NAVIGATION ================= */

function goBack() {
  playClick();
  document.body.className = "";
  document.getElementById("diceScreen").classList.add("hidden");
  document.getElementById("moods").classList.remove("hidden");
}

/* ================= SAVE MESSAGE ================= */

function saveMessage() {
  const text = document.getElementById("customMsg").value;
  localStorage.setItem("savedMessage", text);
  alert("saved 💗");
}

window.onload = () => {
  const saved = localStorage.getItem("savedMessage");
  if (saved) document.getElementById("customMsg").value = saved;
};

/* ================= CONSTELLATIONS ================= */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height
}));

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach(s => {
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(s.x, s.y, 1.5, 0, Math.PI * 2);
    ctx.fill();
  });

  for (let i = 0; i < stars.length; i++) {
    for (let j = i + 1; j < stars.length; j++) {
      const d = Math.hypot(
        stars[i].x - stars[j].x,
        stars[i].y - stars[j].y
      );
      if (d < 120) {
        ctx.strokeStyle = "rgba(255,255,255,0.1)";
        ctx.beginPath();
        ctx.moveTo(stars[i].x, stars[i].y);
        ctx.lineTo(stars[j].x, stars[j].y);
        ctx.stroke();
      }
    }
  }

  requestAnimationFrame(drawStars);
}
drawStars();

/* ================= PWA ================= */

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js");
}
