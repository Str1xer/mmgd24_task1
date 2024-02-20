import Circle from "./circle";
import Hexagon from "./hexagon";
import QuadTree from "./quad-tree";
import Rectangle from "./rectangle";
import Triangle from "./triangle";

const counter = document.getElementById("counter")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const canvas = document.getElementById("cnvs");

const quad = new QuadTree(new Rectangle(0, 0, document.body.clientWidth, document.body.clientHeight))

const gameState = {
    rects: []
}

const size = 16
const circleSize = size * 4 // size + gap  
const cols = Math.floor((window.document.body.clientWidth) / circleSize) - 1
const rows = Math.floor((window.document.body.clientHeight) / circleSize) - 1

for (let i = 0; i < rows * cols; i++) {
    let rand = getRandomInt(0, 2)
    if (rand == 0) {
        gameState.rects.push(new Hexagon(size, circleSize + (i % cols) * circleSize, circleSize + Math.floor(i / cols) * circleSize, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2))
    } else if (rand == 1) {
        gameState.rects.push(new Circle(circleSize + (i % cols) * circleSize, circleSize + Math.floor(i / cols) * circleSize, size, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2))
    } else {
        gameState.rects.push(new Triangle(size * (1 + Math.cos(Math.PI / 6)), circleSize + (i % cols) * circleSize, circleSize + Math.floor(i / cols) * circleSize, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2))
    }
}

function queueUpdates(numTicks) {
    for (let i = 0; i < numTicks; i++) {
        gameState.lastTick = gameState.lastTick + gameState.tickLength
        update(gameState.lastTick)
    }
}

function draw(tFrame) {
    counter.innerHTML = `Object Count: ${gameState.rects.length}`
    const context = canvas.getContext('2d');

    // clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height)

    // draw
    gameState.rects.forEach(r => {
        r.draw(context)
    })
}

function update(tick) {
    quad.clear()

    for (let i = 0; i < gameState.rects.length; i++) {
        quad.insert(gameState.rects[i])
    }

    const actualsRects = []

    for (let i = 0; i < gameState.rects.length; i++) {
        const currentRect = gameState.rects[i]

        const possibleOverlap = quad.queryRange(currentRect)

        let isOverlap = false

        if (currentRect.hits < 3) {
            actualsRects.push(currentRect)
            for (let j = 0; j < possibleOverlap.length; j++) {
                const otherRect = possibleOverlap[j]

                if (otherRect != currentRect && otherRect.hits < 3 && currentRect.intersects(otherRect)) {
                    isOverlap = true
                }
            }
        }

        if (isOverlap) {
            currentRect.vx = -currentRect.vx
            currentRect.vy = -currentRect.vy
            currentRect.changeColor()
            currentRect.hits += 1
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
