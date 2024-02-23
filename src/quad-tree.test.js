import Rectangle from './rectangle'
import QuadTree from './quad-tree'
import Circle from './circle'

describe('QuadTree', () => {
    it('should be empty in the initial state', () => {
        const boundary = new Rectangle(0, 0, 100, 100)
        const tree = new QuadTree(boundary)

        expect(tree.length).toBe(0)
    })

    it('should throw an exception when boundary has not been passed', () => {
        expect(() => {
            const tree = new QuadTree()
        }).toThrow(TypeError)
    })

    it('should throw an exception when boundary is not a Rectangle', () => {
        expect(() => {
            const tree = new QuadTree(42)
        }).toThrow(TypeError)
    })

    it('should be 1 after insert element', () => {
        const boundary = new Rectangle(0, 0, 800, 800)
        const tree = new QuadTree(boundary)

        tree.insert(new Circle(50, 50, 10, 0, 0))

        expect(tree.length).toBe(1)
    })

    it('should be 5 after subdivide', () => {
        const boundary = new Rectangle(0, 0, 800, 800)
        const tree = new QuadTree(boundary)

        tree.insert(new Circle(50, 50, 10, 0, 0))
        tree.insert(new Circle(50, 100, 10, 0, 0))
        tree.insert(new Circle(50, 500, 10, 0, 0))
        tree.insert(new Circle(50, 300, 10, 0, 0))
        tree.insert(new Circle(300, 800, 10, 0, 0))

        expect(tree.length).toBe(5)
    })

    it('should be 5 after subdivide', () => {
        const boundary = new Rectangle(0, 0, 800, 800)
        const tree = new QuadTree(boundary)

        const rect = new Circle(800, 800, 10, 0, 0)
        tree.insert(new Circle(50, 50, 10, 0, 0))
        tree.insert(new Circle(50, 100, 10, 0, 0))
        tree.insert(new Circle(50, 500, 10, 0, 0))
        tree.insert(new Circle(50, 300, 10, 0, 0))
        tree.insert(rect)

        expect(tree.queryRange(rect)[0].color).toBe(rect.color)
    })

    it('should be 5 after subdivide', () => {
        const boundary = new Rectangle(0, 0, 800, 800)
        const tree = new QuadTree(boundary)

        tree.insert(new Circle(50, 50, 10, 0, 0))
        tree.insert(new Circle(50, 100, 10, 0, 0))
        tree.insert(new Circle(50, 500, 10, 0, 0))
        tree.insert(new Circle(50, 300, 10, 0, 0))
        tree.insert(new Circle(50, 300, 10, 0, 0))

        tree.clear()

        expect(tree.length).toBe(0)
        expect(tree._children.length).toBe(0)
        expect(tree._points.length).toBe(0)
    })
})