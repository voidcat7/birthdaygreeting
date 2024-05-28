function createConfetti() {
    const numConfetti = 100; 
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']; 
    const body = document.querySelector('body');

    for (let i = 0; i < numConfetti; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');

        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight * -1; 
        const randomDelay = Math.random() * 4;
        const randomRotation = Math.random() * 360;

        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = randomColor;

        confetti.style.left = `${randomX}px`;
        confetti.style.top = `${randomY}px`; 
        confetti.style.animationDelay = `${randomDelay}s`;
        confetti.style.transform = `rotateZ(${randomRotation}deg)`;

        body.appendChild(confetti);
    }
}

createConfetti();

function calculateTimeRemaining() {
    const currentTime = new Date();
    const targetDate = new Date("May 29, 2024 00:00:00");
    const timeDifference = targetDate - currentTime;

    if (timeDifference <= 0) {
        document.getElementById('countdown').style.display = 'none';
        document.getElementById('content').classList.remove('hidden');
    } else {
        const totalSeconds = Math.floor(timeDifference / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        document.getElementById('days').innerText = formatTime(days);
        document.getElementById('hours').innerText = formatTime(hours);
        document.getElementById('minutes').innerText = formatTime(minutes);
        document.getElementById('seconds').innerText = formatTime(seconds);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(calculateTimeRemaining, 1000);

document.getElementById('content').classList.add('hidden');
