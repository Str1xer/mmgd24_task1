import Circle from './circle'
import Hexagon from "./hexagon"

describe('Circle getters', () => {
    it('should calculate borders correctly', () => {
        const rect = new Circle(20, 20, 10, 0, 0)
        expect(rect.bottom).toBe(30)
        expect(rect.left).toBe(10)
        expect(rect.top).toBe(10)
        expect(rect.right).toBe(30)
    })
})


describe('Circle getters', () => {
    it('should calculate borders correctly', () => {
        const rect = new Circle(20, 20, 10, 0, 0)
        expect(rect.bottom).toBe(30)
        expect(rect.left).toBe(10)
        expect(rect.top).toBe(10)
        expect(rect.right).toBe(30)
    })
})

describe('Circle.contains()', () => {
    let rect
    beforeEach(() => {
        rect = new Circle(20, 20, 10, 0, 0)
    })

    it('should returns true if point is inside the rect', () => {
        expect(rect.contains({ x: 20, y: 20 })).toBeTruthy()
    })

    it('should returns true if point is inside the rect', () => {
        expect(rect.contains({ x: 25, y: 25 })).toBeTruthy()
    })

    it('should returns true if point is inside the rect', () => {
        expect(!rect.contains({ x: 30, y: 30 })).toBeTruthy()
    })
})
