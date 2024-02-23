import Rectangle from "./rectangle"

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

    contains(point) {
        return Math.sqrt(Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)) <= this.r
    }
}