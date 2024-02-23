import { PolygonVsPolygon, PolygonVsCircle, CircleVsCircle } from "./intersects"

class CollisionComponent {
    constructor() { }

    intersects(rectA, rectB) {
        if (rectA.type === "Circle" && rectB.type === "Circle")
            return CircleVsCircle(rectA, rectB)
        if (rectA.type === "Circle")
            return PolygonVsCircle(rectB, rectA)
        if (rectB.type === "Circle")
            return PolygonVsCircle(rectA, rectB)
        return PolygonVsPolygon(rectA, rectB)
    }
}

export default CollisionComponent