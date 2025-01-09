const pacArray = [
    ['images/pacman1.png', 'images/pacman2.png'],
    ['images/pacman3.png', 'images/pacman4.png']
];
const pacMen = []; // This array holds all PacMen objects

function setToRandom(scale) {
    return {
        x: Math.random() * scale,
        y: Math.random() * scale
    };
}

function makePacMan() {
    let velocity = setToRandom(10); // random velocity
    let position = setToRandom(200); // random position
    let game = document.getElementById('game');
    let newPacMan = document.createElement('img');
    newPacMan.src = pacArray[0][0];
    newPacMan.style.position = 'absolute';
    newPacMan.style.left = position.x + 'px';
    newPacMan.style.top = position.y + 'px';
    game.appendChild(newPacMan);
    return {
        position,
        velocity,
        newPacMan
    };
}

function update() {
    pacMen.forEach((item) => {
        item.position.x += item.velocity.x;
        item.position.y += item.velocity.y;

        item.newPacMan.style.left = item.position.x + 'px';
        item.newPacMan.style.top = item.position.y + 'px';
    });
    setTimeout(update, 20);
}

function addPacMan() {
    pacMen.push(makePacMan());
}

function startGame() {
    update();
}
