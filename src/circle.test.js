import Circle from './circle'

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

// describe('Rectangle.intersects()', () => {
//     let rect
//     beforeEach(() => {
//         rect = new Rectangle(0, 0, 3, 2)
//     })

//     it('should return true if rects are intersecting', () => {
//         const otherRect = new Rectangle(1, 1, 3, 2)
//         expect(rect.intersects(otherRect)).toBeTruthy()

//         //    0    1    2    3    4
//         // 0  ┼──────────────○──────
//         //    │              │
//         // 1  │   ○───────────────○
//         //    │   │◽◽◽◽◽◽◽◽◽◽│
//         // 2  ┼──────────────○    │
//         //    │   │               │
//         // 3  │   ○───────────────○
//     })

//     it('should return true if one rect contains other', () => {
//         const otherRect = new Rectangle(1, 0, 1, 2)
//         expect(rect.intersects(otherRect)).toBeTruthy()

//         //    0    1    2    3    4
//         // 0  ┼────○────○────○──────
//         //    │    │◽◽◽◽│    │
//         // 1  │    │◽◽◽◽│    │
//         //    │    │◽◽◽◽│    │
//         // 2  ┼────○────○────○
//         //    │
//     })

//     it('should return false if rects are not intersecting', () => {
//         const otherRect = new Rectangle(10, 10, 1, 1)
//         expect(rect.intersects(otherRect)).toBeFalsy()
//     })
// })