import Rectangle from "./rectangle"

function DotProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}

export default class Triangle extends Rectangle {
    constructor(a, x, y, vx, vy) {
        super()
        this.x = x
        this.y = y
        this.a = a
        this.vx = vx
        this.vy = vy
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
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

    getAllNewCoords(cosA) {
        const sinA = Math.sqrt(1 - cosA * cosA)

        return {
            X: [RotateX((this.left + this.right) / 2, this.top, cosA, sinA), RotateX(this.left, this.bottom, cosA, sinA), RotateX(this.right, this.bottom, cosA, sinA)],
            Y: [RotateY((this.left + this.right) / 2, this.top, cosA, sinA), RotateY(this.left, this.bottom, cosA, sinA), RotateY(this.right, this.bottom, cosA, sinA)]
        }
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