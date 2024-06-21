document.addEventListener('DOMContentLoaded', () => {
    // Check if audio already exists
    if (!window.audio) {
        // Create an audio element if it doesn't exist
        window.audio = new Audio('background_music.mp3');
        window.audio.loop = true;

        // Retrieve the audio's current time from localStorage
        const savedTime = localStorage.getItem('audio-current-time') || 0;
        window.audio.currentTime = parseFloat(savedTime);

        // Ensure audio plays on first interaction
        window.audio.play().catch(() => {
            document.addEventListener('click', () => window.audio.play(), { once: true });
        });

        // Update current time in localStorage every second
        setInterval(() => {
            localStorage.setItem('audio-current-time', window.audio.currentTime);
        }, 1000);
    } else {
        // Continue playing the audio if it already exists
        window.audio.play().catch(() => {
            document.addEventListener('click', () => window.audio.play(), { once: true });
        });
    }
});
