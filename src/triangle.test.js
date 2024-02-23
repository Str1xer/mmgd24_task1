import Triangle from './triangle'

describe('Triangle getters', () => {
    it('should calculate borders correctly', () => {
        const rect = new Triangle(10, 20, 20, 0, 0)
        expect(rect.bottom).toBe(20)
        expect(rect.left).toBe(15)
        expect(rect.top).toBe(20 - Math.cos(Math.PI / 6) * 10)
        expect(rect.right).toBe(25)
    })
})