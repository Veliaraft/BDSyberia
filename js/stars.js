const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.opacity = 0;

// Количество звезд для генерации
const numStars = 1200;
let stars = [];
function random(min, max) {
    return Math.random() * (max - min) + min;
}
// Генерация звезд
function stars_pos_innitalize(){
    stars = []
    for (let i = 0; i < numStars; i++) {
        let x = random(0, canvas.width);
        let y = random(0, canvas.height);
        let radius = random(0.05, 0.8);
        let color = `hsl(${random(160, 210)}, 100%, ${random(50, 70)}% `; // Цвет звезды
        stars.push({x, y, radius, color});
    }
}
stars_pos_innitalize();
// Отображение звезд на canvas
function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let star of stars) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
    }
}

// Запускаем анимацию
function animate() {
    requestAnimationFrame(animate);
    drawStars();
}
animate();

let canopa = 0
let stars_timer = setInterval(function() {
    if (canopa >= 1) clearInterval(stars_timer);
    else {
        canopa += 0.05;     
        canvas.style.opacity = canopa;
    }
}, 60);

// Обновляем размер canvas при изменении размера окна
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    stars_pos_innitalize();
    drawStars(); // Перерисовываем звезды после изменения размера
}, true);