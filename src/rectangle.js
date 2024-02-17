export default class Rectangle {
    constructor(x, y, w, h, vx, vy) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = vx
        this.vy = vy
        this.hits = 0
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
        this.verticles = [{ x: this.left, y: this.top }, { x: this.right, y: this.top }, { x: this.right, y: this.bottom }, { x: this.left, y: this.bottom }]
    }

    get left() {
        return this.x - this.w / 2
    }

    get right() {
        return this.x + this.w / 2
    }

    get top() {
        return this.y - this.h / 2
    }

    get bottom() {
        return this.y + this.h / 2
    }

    draw(context) {
        context.beginPath()
        context.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)
        context.fillStyle = this.color
        context.fill()
    }

    changeColor() {
        this.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`

    }

    contains(point) {
        return (point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h)
    }

    getAllNewCoords(cosA) {
        const sinA = Math.sqrt(1 - cosA * cosA)

        return {
            X: [RotateX(this.left, this.top, cosA, sinA), RotateX(this.left, this.bottom, cosA, sinA), RotateX(this.right, this.top, cosA, sinA), RotateX(this.right, this.bottom, cosA, sinA)],
            Y: [RotateY(this.left, this.top, cosA, sinA), RotateY(this.left, this.bottom, cosA, sinA), RotateY(this.right, this.top, cosA, sinA), RotateY(this.right, this.bottom, cosA, sinA)]
        }
    }

    intersects(rect) {
        const axes = new Set()
        
        for (let i = 0; i < this.verticles.length - 1; i++) 
        {
            const normal = (this.verticles[i+1].x - this.verticles[i].x) / (Math.sqrt(Math.pow(this.verticles[i+1].x - this.verticles[i].x, 2) + Math.pow(this.verticles[i+1].y - this.verticles[i].y, 2)))
            axes.add(normal)
        }

        for (let i = 0; i < rect.verticles.length - 1; i++) 
        {
            const normal = (rect.verticles[i+1].x - rect.verticles[i].x) / (Math.sqrt(Math.pow(rect.verticles[i+1].x - rect.verticles[i].x, 2) + Math.pow(rect.verticles[i+1].y - rect.verticles[i].y, 2)))
            axes.add(normal)
        }

        let overlap = true

        axes.forEach((axis) => {

            const newCordsThis = this.getAllNewCoords(axis)
            const newCordsOther = rect.getAllNewCoords(axis)

            const d1x = Math.min(...newCordsOther.X) - Math.max(...newCordsThis.X)
            const d2x = Math.min(...newCordsThis.X) - Math.max(...newCordsOther.X)
            const d1y = Math.min(...newCordsOther.Y) - Math.max(...newCordsThis.Y)
            const d2y = Math.min(...newCordsThis.Y) - Math.max(...newCordsOther.Y)

            if (d1x > 0 || d2x > 0 || d1y > 0 || d2y > 0) {
                overlap = false;
            }

            overlap = overlap && true
        })

        return overlap
    }
}