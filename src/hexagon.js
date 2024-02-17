import Rectangle from "./rectangle"

function DotProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}

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

        if (rect.constructor.name === "Circle") {

            const temp = [...this.verticles, this.verticles[0]]

            for (let i = 0; i < temp.length - 1; i++) {
                const normal = { x: (temp[i].y - temp[i + 1].y), y: -(temp[i].x - temp[i + 1].x) }
                const cosA = DotProduct({ x: 1, y: 0 }, normal) / Math.sqrt(Math.pow(normal.x, 2) + Math.pow(normal.y, 2))
                const sinA = Math.sqrt(1 - cosA * cosA)

                const tempY = -(temp[i].x - rect.x) * sinA + (temp[i].y - rect.y) * cosA
                const tempX = (temp[i].x - rect.x) * cosA + (temp[i].y - rect.y) * sinA

                const dist = Math.pow(tempX, 2) + Math.pow(tempY, 2) - rect.r * rect.r

                if (dist < 0) return true;
            }

            return false

        } else {

            const temp = [...this.verticles, this.verticles[0]]

            let separation = Number.NEGATIVE_INFINITY

            for (let i = 0; i < temp.length - 1; i++) {
                const normal = { x: (temp[i].y - temp[i + 1].y), y: -(temp[i].x - temp[i + 1].x) }
                let minSep = Number.MAX_VALUE

                const tempVerticesOther = [...rect.verticles, rect.verticles[0]]
                for (let j = 0; j < tempVerticesOther.length - 1; j++) {
                    minSep = Math.min(minSep, DotProduct(normal, { x: tempVerticesOther[j].x - temp[i].x, y: tempVerticesOther[j].y - temp[i].y }))
                }

                separation = Math.max(separation, minSep)
            }

            return separation < 0

        }

    }
}