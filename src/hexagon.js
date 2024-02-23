import Rectangle from "./rectangle"
import { PolygonVsCircle, PolygonVsPolygon } from "./utils/intersects";

export default class Hexagon extends Rectangle {
    constructor(r, x, y, vx, vy) {
        super(x, y, r, r, vx, vy)
        this.type = "Hexagon"
        this.r = r
        this.hits = 0
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        
        this.verticles = []
        const a = 2 * Math.PI / 6;
        for (var i = 0; i < 6; i++) {
            this.verticles = [...this.verticles, { x: this.x + this.r * Math.cos(-a * i), y: this.y + this.r * Math.sin(-a * i) }]
        }

    }

    get left() {
        return this.x - this.w
    }

    get right() {
        return this.x + this.w
    }

    get top() {
        return this.y + this.h * Math.sin(-2 * Math.PI / 6)
    }

    get bottom() {
        return this.y + this.h * Math.sin(2 * Math.PI / 6)
    }
}