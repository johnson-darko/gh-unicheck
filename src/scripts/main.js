// This file contains JavaScript code for the landing page functionality.
// Countdown timer for launch (19 days from now)
document.addEventListener('DOMContentLoaded', function() {
    const countdownElement = document.getElementById('countdown');
    const progressBar = document.getElementById('countdown-progress');
    const totalDays = 19;
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + totalDays);

    let lastDays = null;

    function animateNumberChange() {
        countdownElement.classList.add('animate');
        setTimeout(() => {
            countdownElement.classList.remove('animate');
        }, 400);
    }

    function updateCountdown() {
        const now = new Date();
        const diff = launchDate - now;
        if (diff <= 0) {
            countdownElement.textContent = 'Launched!';
            if (progressBar) progressBar.style.width = '100%';
            return;
        }
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        // Animated number effect for days
        if (lastDays !== days) {
            animateNumberChange();
            lastDays = days;
        }
        countdownElement.textContent = days;
        countdownElement.setAttribute('title', `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`);

        // Progress bar animation
        if (progressBar) {
            const percent = ((totalDays - days) / totalDays) * 100;
            progressBar.style.width = percent + '%';
        }
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});
