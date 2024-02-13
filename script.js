document.getElementById('yesBtn').addEventListener('click', function() {
    window.location.href = 'love.html'; // Navigate to the affirmation page
});

const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', function() {
    const maxX = window.innerWidth - this.clientWidth;
    const maxY = window.innerHeight - this.clientHeight;
    this.style.left = Math.random() * maxX + 'px';
    this.style.top = Math.random() * maxY + 'px';
    this.style.position = 'absolute';
});

