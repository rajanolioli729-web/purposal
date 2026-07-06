// ================================
// Background Music (Auto Play)
// ================================
const music = new Audio("mp4.mp4");

music.loop = true;
music.volume = 0.8;

// Try autoplay when page loads
window.addEventListener("load", () => {
    const playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(() => {
            console.log("Autoplay blocked by browser.");
        });
    }
});

// Try again when page becomes visible
document.addEventListener("visibilitychange", () => {
    if (!document.hidden && music.paused) {
        music.play().catch(() => {});
    }
});

// Fallback: first user interaction
["click", "touchstart", "keydown", "mousemove"].forEach(event => {
    window.addEventListener(event, () => {
        if (music.paused) {
            music.play().catch(() => {});
        }
    }, { once: true });
});