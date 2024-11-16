let clickCount = 0;
const maxClicks = 10;
const initialLoveValue = 100;
const incrementValue = 100;

// Handle button click
document.getElementById("heart-button").addEventListener("click", function () {
    if (clickCount < maxClicks) {
        clickCount++;
        const loveValue = clickCount === maxClicks ? "∞" : initialLoveValue + (clickCount * incrementValue);
        document.getElementById("click-count").innerText = `Our love for each other = ${loveValue}`;

        // Update meter
        document.getElementById("meter").style.width = `${(clickCount / maxClicks) * 100}%`;

        // Show final message & effects
        if (clickCount === maxClicks) {
            document.getElementById("love-message").style.display = "block";
            triggerConfetti();
            createHearts();
        }
    }
});

// Confetti
function triggerConfetti() {
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ["#FF69B4", "#FF1493", "#FFD700"],
    });
}

// Floating Hearts
function createHearts() {
    const body = document.body;
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement("span");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 10 + "px";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        body.appendChild(heart);

        setTimeout(() => heart.remove(), 5000);
    }
}
