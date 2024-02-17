import Rectangle from "./rectangle"

function DotProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}

function clamp(value, min, max) {
    if (value < min) return min;
    if (value > max) return max;
    return value;
}

export default class Circle extends Rectangle {
    constructor(x, y, r, vx, vy) {
        super(x, y, r, r, vx, vy)
        this.r = r
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

    intersects(rect) {

        if (rect.constructor.name === "Circle") {

            const dist = Math.sqrt(Math.pow(rect.x - this.x, 2) + Math.pow(rect.y - this.y, 2))

            if (dist < this.r + rect.r) return true
            return false

        } else {

            const temp = [...rect.verticles, rect.verticles[0]]

            for (let i = 0; i < temp.length - 1; i++) {
                const normal = { x: (temp[i].y - temp[i + 1].y), y: -(temp[i].x - temp[i + 1].x) }
                const cosA = DotProduct({ x: 1, y: 0 }, normal) / Math.sqrt(Math.pow(normal.x, 2) + Math.pow(normal.y, 2))
                const sinA = Math.sqrt(1 - cosA * cosA)

                const tempY = -(temp[i].x - this.x) * sinA + (temp[i].y - this.y) * cosA
                const tempX = (temp[i].x - this.x) * cosA + (temp[i].y - this.y) * sinA

                const dist = Math.pow(-(temp[i].x - this.x) * sinA + (temp[i].y - this.y) * cosA, 2) + Math.pow((temp[i].x - this.x) * cosA + (temp[i].y - this.y) * sinA, 2) - this.r * this.r

                if (dist < 0) return true;
            }

            return false

        }

    }
}