import Circle from './circle'
import Hexagon from "./hexagon"

describe('Hexagon getters', () => {
    it('should calculate borders correctly', () => {
        const rect = new Hexagon(10, 20, 20, 0, 0)
        expect(rect.bottom).toBe(20 + 10 * Math.sin(2 * Math.PI / 6 * 1))
        expect(rect.left).toBe(10)
        expect(rect.top).toBe(20 + 10 * Math.sin(2 * Math.PI / 6 * -1))
        expect(rect.right).toBe(30)
    })
})