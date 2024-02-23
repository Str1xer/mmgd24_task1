import Rectangle from "./rectangle"
import { PolygonVsCircle, PolygonVsPolygon } from "./utils/intersects";

export default class Triangle extends Rectangle {
    constructor(a, x, y, vx, vy) {
        super(x, y, a, a, vx, vy)
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
}