import Rectangle from "./rectangle"
import { PolygonVsCircle, PolygonVsPolygon } from "./utils/intersects";

export default class Triangle extends Rectangle {
    constructor(a, x, y, vx, vy) {
        super()
        this.type = "Triangle"
        this.x = x
        this.y = y
        this.a = a
        this.vx = vx
        this.vy = vy
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        this.hits = 0
        this.verticles = [
            { x: this.left, y: this.bottom },
            { x: this.right, y: this.bottom },
            { x: (this.left + this.right) / 2, y: this.top }
        ]
    }

    draw(context) {
        if (this.hits >= 3) return

        this.verticles = [
            { x: this.left, y: this.bottom },
            { x: this.right, y: this.bottom },
            { x: (this.left + this.right) / 2, y: this.top }
        ]
        context.beginPath()
        context.moveTo(this.left, this.bottom)
        context.lineTo(this.right, this.bottom)
        context.lineTo((this.left + this.right) / 2, this.top)
        context.closePath()
        context.fillStyle = this.color
        context.fill()
    }

    get left() {
        return this.x - this.a / 2
    }

    get right() {
        return this.x + this.a / 2
    }

    get top() {
        return this.y - Math.cos(Math.PI / 6) * this.a
    }

    get bottom() {
        return this.y
    }

    changeColor() {
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }

    intersects(rect) {
        return rect.type === "Circle" ? PolygonVsCircle(this, rect) : PolygonVsPolygon(this, rect)
    }
}