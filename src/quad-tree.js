import Rectangle from './rectangle'

export default class QuadTree {
    constructor(boundary, level = 1, capacity = 4) {
        if (!boundary) {
            throw TypeError('boundary is null or undefined')
        }

        if (!(boundary instanceof Rectangle)) {
            throw TypeError('boundary should be a Rectangle')
        }

        this._points = []
        this._count = 0
        this._boundary = boundary
        this._capacity = capacity
        this._hasChildren = false
        this._children = []
        this.level = level
    }

    insert(point) {

        this._points.push(point)
        this._count += 1

        if (this._count > this._capacity) {

            if (!this._hasChildren)
                this._subdivide()

            for (let i = 0; i < this._points.length; i++) {
                let response = []

                if (this._children[0]._boundary.intersects(this._points[i])) {
                    response[0] = this._children[0].insert(this._points[i])
                }
                if (this._children[1]._boundary.intersects(this._points[i])) {
                    response[1] = this._children[1].insert(this._points[i])
                }
                if (this._children[2]._boundary.intersects(this._points[i])) {
                    response[2] = this._children[2].insert(this._points[i])
                }
                if (this._children[3]._boundary.intersects(this._points[i])) {
                    response[3] = this._children[3].insert(this._points[i])
                }
            }

            this._points = []
        }

        return true
    }

    get length() {
        // console.log(this)
        let count = this._count
        // if (this._hasChildren) {
        //     count += this._children[0].length
        //     count += this._children[1].length
        //     count += this._children[2].length
        //     count += this._children[3].length
        // }
        return count
    }

    queryRange(rect, found = []) {

        if (this._hasChildren) {
            if (this._children[0]._boundary.intersects(rect))
                found = [...found, ...this._children[0].queryRange(rect, found)]
            if (this._children[1]._boundary.intersects(rect))
                found = [...found, ...this._children[1].queryRange(rect, found)]
            if (this._children[2]._boundary.intersects(rect))
                found = [...found, ...this._children[2].queryRange(rect, found)]
            if (this._children[3]._boundary.intersects(rect))
                found = [...found, ...this._children[3].queryRange(rect, found)]
        }

        found = [...found, ...this._points]

        return found
    }

    _subdivide() {
        const subWidth = this._boundary.w / 2
        const subHeight = this._boundary.h / 2

        this._children.push(new QuadTree(new Rectangle(this._boundary.x, this._boundary.y, subWidth, subHeight), this.level + 1))
        this._children.push(new QuadTree(new Rectangle(this._boundary.x + subWidth, this._boundary.y, subWidth, subHeight), this.level + 1))
        this._children.push(new QuadTree(new Rectangle(this._boundary.x + subWidth, this._boundary.y + subHeight, subWidth, subHeight), this.level + 1))
        this._children.push(new QuadTree(new Rectangle(this._boundary.x, this._boundary.y + subHeight, subWidth, subHeight), this.level + 1))

        this._hasChildren = true
    }

    clear() {
        this._points = []
        this._children = []
        this._hasChildren = false
        this._count = 0
    }

    printTree() {
        // console.log(this._children)
        // console.log(this._points, this._children)
    }
}
