function DotProduct(vec1, vec2) {
    return vec1.x * vec2.x + vec1.y * vec2.y;
}

const PolygonVsPolygon = (a, b) => {
    const verticlesA = [...b.verticles, b.verticles[0]]
    const verticlesB = [...a.verticles, a.verticles[0]]

    let separation = Number.NEGATIVE_INFINITY

    for (let i = 0; i < verticlesA.length - 1; i++) {
        const normal = { x: (verticlesA[i].y - verticlesA[i + 1].y), y: -(verticlesA[i].x - verticlesA[i + 1].x) }
        let minSep = Number.MAX_VALUE

        for (let j = 0; j < verticlesB.length - 1; j++) {
            minSep = Math.min(minSep, DotProduct(normal, { x: verticlesB[j].x - verticlesA[i].x, y: verticlesB[j].y - verticlesA[i].y }))
        }

        separation = Math.max(separation, minSep)
    }

    for (let i = 0; i < verticlesB.length - 1; i++) {
        const normal = { x: (verticlesB[i].y - verticlesB[i + 1].y), y: -(verticlesB[i].x - verticlesB[i + 1].x) }
        let minSep = Number.MAX_VALUE

        for (let j = 0; j < verticlesA.length - 1; j++) {
            minSep = Math.min(minSep, DotProduct(normal, { x: verticlesA[j].x - verticlesB[i].x, y: verticlesA[j].y - verticlesB[i].y }))
        }

        separation = Math.max(separation, minSep)
    }

    return separation <= 0
}

const PolygonVsCircle = (polygon, circle) => {
    const temp = [...polygon.verticles, polygon.verticles[0]]

    let separation = Number.NEGATIVE_INFINITY

    for (let i = 0; i < temp.length - 1; i++) {
        const normal = { x: (temp[i].y - temp[i + 1].y), y: -(temp[i].x - temp[i + 1].x) }

        let minSep = Number.MAX_VALUE

        const cosA = DotProduct({ x: 1, y: 0 }, normal) / Math.sqrt(Math.pow(normal.x, 2) + Math.pow(normal.y, 2))
        const sinA = Math.sqrt(1 - cosA * cosA)

        for (let j = 0; j < temp.length - 1; j++) {
            const tempY = -(temp[j].x - circle.x) * sinA + (temp[j].y - circle.y) * cosA
            const tempX = (temp[j].x - circle.x) * cosA + (temp[j].y - circle.y) * sinA

            const dist = Math.pow(tempX, 2) - circle.r * circle.r

            minSep = Math.min(minSep, dist)
        }

        separation = Math.max(separation, minSep)
    }

    return separation <= 0
}


const CircleVsCircle = (circleA, circleB) => {
    const dist = Math.sqrt(Math.pow(circleB.x - circleA.x, 2) + Math.pow(circleB.y - circleA.y, 2))

    if (dist <= circleA.r + circleB.r) return true
    return false
}

export { CircleVsCircle, PolygonVsPolygon, PolygonVsCircle }