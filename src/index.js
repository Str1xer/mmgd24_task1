import Circle from "./circle";
import Hexagon from "./hexagon";
import Rectangle from "./rectangle";
import Triangle from "./triangle";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const canvas = document.getElementById("cnvs");

const gameState = {
    rects:
        [
            // new Triangle(50, 100, 100, 0, 1),
            // new Triangle(50, 140, 600, 0, -1)
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Triangle(50, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),

            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Hexagon(25, getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),

            // new Circle(100, 300, 25, 0, 1),
            // new Circle(100, 600, 25, 0, -1),
            // new Triangle(50, 140, 600, 0, -1),
            // new Hexagon(25, 120, 100, 0, -1)

            // new Rectangle(700, 10, 20, 20, -1, 0),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2),
            new Circle(getRandomInt(100, document.body.clientWidth - 100), getRandomInt(100, document.body.clientHeight - 100), getRandomInt(20, 40), (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2)
        ],
};

function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength
        update(gameState.lastTick)
    }
}

function draw(tFrame) {
    const context = canvas.getContext('2d');

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // draw
    gameState.rects.forEach(r => {
        r.draw(context)
    })

    // gameState.circles.forEach(c => {
    //     c.draw(context)
    // })
}

function update(tick) {

    const actualsRects = []

    for (let i = 0; i < gameState.rects.length; i++) {
        const currentRect = gameState.rects[i]

        let isOverlap = false;
        const overlapRects = []
        
        if (currentRect.hits < 3) {
            actualsRects.push(currentRect)
            for (let j = i + 1; j < gameState.rects.length; j++) {
                const otherRect = gameState.rects[j]

                if (otherRect.hits < 3 && currentRect.intersects(otherRect)) {
                    overlapRects.push(otherRect)
                    isOverlap = isOverlap || true
                }
            }
        }

        if (isOverlap) {
            currentRect.vx = -currentRect.vx
            currentRect.vy = -currentRect.vy
            currentRect.changeColor()
            currentRect.hits += 1

            overlapRects.forEach(otherRect => {
                otherRect.vx = -otherRect.vx
                otherRect.vy = -otherRect.vy
                otherRect.changeColor()
                otherRect.hits += 1
            })
        } else if (currentRect.left < 0 || currentRect.top < 0 || currentRect.right > document.body.clientWidth || currentRect.bottom > document.body.clientHeight) {
            currentRect.vx = -currentRect.vx
            currentRect.vy = -currentRect.vy
        }
    }

    gameState.rects.forEach(c => {
        c.x += c.vx
        c.y += c.vy
    })

    gameState.rects = actualsRects
}

function run(tFrame) {
    gameState.stopCycle = window.requestAnimationFrame(run)

    const nextTick = gameState.lastTick + gameState.tickLength
    let numTicks = 0

    if (tFrame > nextTick) {
        const timeSinceTick = tFrame - gameState.lastTick
        numTicks = Math.floor(timeSinceTick / gameState.tickLength)
    }
    queueUpdates(numTicks)
    draw(tFrame)
    gameState.lastRender = tFrame
}

function stopGame(handle) {
    window.cancelAnimationFrame(handle);
}

function setup() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    gameState.lastTick = performance.now()
    gameState.lastRender = gameState.lastTick
    gameState.tickLength = 15 //ms

}

setup();
run();
