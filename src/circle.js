import Rectangle from "./rectangle"
import { CircleVsCircle, PolygonVsCircle } from "./utils/intersects"

export default class Circle extends Rectangle {
    constructor(x, y, r, vx, vy) {
        super(x, y, r, r, vx, vy)
        this.r = r
        this.type = "Circle"
        this.hits = 0
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }

    get left() {
        return this.x - this.w
    }

    get right() {
        return this.x + this.w
    }

    get top() {
        return this.y - this.h
    }

    get bottom() {
        return this.y + this.h
    }

    draw(context) {
        if (this.hits >= 3) return
        context.beginPath()
        context.arc(this.x, this.y, this.w, 0, 2 * Math.PI, false)
        context.fillStyle = this.color
        context.fill()
    }

    changeColor() {
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }

    contains(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)) < this.r
    }

    intersects(rect) {
        return rect.type === "Circle" ? CircleVsCircle(this, rect) : PolygonVsCircle(rect, this)
    }
}