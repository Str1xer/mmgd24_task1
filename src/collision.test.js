import CollisionComponent from "./utils/collision";
import Triangle from "./triangle";
import Circle from "./circle";
import Hexagon from "./hexagon";

describe('Triangle.intersects()', () => {
    let collisionComponent = new CollisionComponent()

    let rect
    beforeEach(() => {
        rect = new Triangle(10, 40, 40, 0, 0)
    })

    it('should return true if triangle are intersecting', () => {
        const otherTriangle = new Triangle(10, 50, 40, 0, 0)
        expect(collisionComponent.intersects(rect, otherTriangle)).toBeTruthy()
    })
    it('should return false if triangle are not intersecting', () => {
        const otherTriangle = new Triangle(10, 51, 40, 0, 0)
        expect(collisionComponent.intersects(rect, otherTriangle)).toBeFalsy()
    })
    it('should return false if triangle are not intersecting', () => {
        const otherTriangle = new Triangle(10, 44, 49, 0, 0)
        expect(collisionComponent.intersects(rect, otherTriangle)).toBeFalsy()
    })

    it('should return true if triangle are intersecting', () => {
        const otherCirlce = new Circle(55, 40, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCirlce)).toBeTruthy()
    })

    it('should return false if triangle are not intersecting', () => {
        const otherCirlce = new Circle(60, 40, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCirlce)).toBeFalsy()
    })

    it('should return false if triangle are not intersecting', () => {
        const otherCirlce = new Circle(53, 30, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCirlce)).toBeFalsy()
    })

    it('should return true if triangle are intersecting', () => {
        const otherHexagon = new Hexagon(10, 200, 40, 0, 0)
        expect(collisionComponent.intersects(rect, otherHexagon)).toBeFalsy()
    })
})

describe('Hexagon.intersects()', () => {
    let collisionComponent = new CollisionComponent()

    let rect
    beforeEach(() => {
        rect = new Hexagon(10, 50, 50, 0, 0)
    })

    it('should return true if triangle are intersecting', () => {
        const otherHexagon = new Hexagon(10, 50, 50, 0, 0)
        expect(collisionComponent.intersects(rect, otherHexagon)).toBeTruthy()
    })

    it('should return true if triangle are intersecting', () => {
        const otherHexagon = new Hexagon(10, 70, 50, 0, 0)
        expect(collisionComponent.intersects(rect, otherHexagon)).toBeTruthy()
    })
    it('should return true if triangle are intersecting', () => {
        const otherHexagon = new Hexagon(10, 71, 50, 0, 0)
        expect(collisionComponent.intersects(rect, otherHexagon)).toBeFalsy()
    })

    it('should return true if triangle are intersecting', () => {
        const otherHexagon = new Hexagon(10, 65, 45, 0, 0)
        expect(collisionComponent.intersects(rect, otherHexagon)).toBeTruthy()
    })
})

describe('Circle.intersects()', () => {
    let collisionComponent = new CollisionComponent()

    let rect
    beforeEach(() => {
        rect = new Circle(20, 20, 10, 0, 0)
    })

    it('should return true if circles are intersecting', () => {
        const otherCircle = new Circle(20, 30, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCircle)).toBeTruthy()
    })

    it('should return true if one rect contains other', () => {
        const otherCircle = new Circle(20, 40, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCircle)).toBeTruthy()
    })

    it('should return false if rects are not intersecting', () => {
        const otherCircle = new Circle(45, 45, 10, 0, 0)
        expect(collisionComponent.intersects(rect, otherCircle)).toBeFalsy()
    })

    it('should return false if rects are not intersecting', () => {
        const hexagon = new Hexagon(10, 40, 20, 0, 0)
        expect(collisionComponent.intersects(rect, hexagon)).toBeTruthy()
    })
})