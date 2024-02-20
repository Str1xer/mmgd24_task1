export default class Rectangle {
    constructor(x, y, w, h, vx = 0, vy = 0) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.vx = vx
        this.vy = vy
    }

    get left() {
        return this.x
    }

    get right() {
        return this.x + this.w
    }

    get top() {
        return this.y
    }

    get bottom() {
        return this.y + this.h
    }

    contains(point) {
        return (point.x >= this.x &&
            point.x < this.x + this.w &&
            point.y >= this.y &&
            point.y < this.y + this.h)
    }

    intersects(rect) {
        let d1x = rect.left - this.right
        let d1y = rect.top - this.bottom
        let d2x = this.left - rect.right
        let d2y = this.top - rect.bottom

        if (d1x > 0|| d1y>0 || d2x > 0 || d2y >0) return false

        return true
        // return (this.left < rect.right)
        //     && (rect.left < rect.right)
        //     && (this.top < rect.bottom)
        //     && (rect.top < this.bottom)
    }
}