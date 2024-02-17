import Rectangle from "./rectangle"
import { PolygonVsCircle, PolygonVsPolygon } from "./utils/intersects";

export default class Hexagon extends Rectangle {
    constructor(r, x, y, vx, vy) {
        super()
        this.x = x
        this.y = y
        this.r = r
        this.vx = vx
        this.vy = vy
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        this.verticles = []
    }

    draw(context) {
        if (this.hits >= 3) return

        const a = 2 * Math.PI / 6;

        let tempVerticles = []

        context.beginPath()
        for (var i = 0; i < 6; i++) {
            tempVerticles = [...tempVerticles, { x: this.x + this.r * Math.cos(-a * i), y: this.y + this.r * Math.sin(-a * i) }]
            context.lineTo(this.x + this.r * Math.cos(-a * i), this.y + this.r * Math.sin(-a * i));
        }
        context.closePath()
        context.fillStyle = this.color
        context.fill()

        this.verticles = tempVerticles
    }

    get left() {
        return this.x - this.r
    }

    get right() {
        return this.x + this.r
    }

    get top() {
        return this.y - this.r
    }

    get bottom() {
        return this.y + this.r
    }

    changeColor() {
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }

    intersects(rect) {
        return rect.constructor.name === "Circle" ? PolygonVsCircle(this, rect) : PolygonVsPolygon(this, rect)
    }
}