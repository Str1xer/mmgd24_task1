class RenderComponent {
    constructor() { }

    drawRect(context, rect) {
        if (rect.hits >= 3) return

        if (rect.type === "Circle") {
            context.beginPath()
            context.arc(rect.x, rect.y, rect.w, 0, 2 * Math.PI, false)
            context.fillStyle = rect.color
            context.fill()
            return
        }

        if (rect.type === "Hexagon") {
            const a = 2 * Math.PI / 6;

            let tempVerticles = []

            context.beginPath()
            for (var i = 0; i < 6; i++) {
                tempVerticles = [...tempVerticles, { x: rect.x + rect.r * Math.cos(-a * i), y: rect.y + rect.r * Math.sin(-a * i) }]
                context.lineTo(rect.x + rect.r * Math.cos(-a * i), rect.y + rect.r * Math.sin(-a * i));
            }
            context.closePath()
            context.fillStyle = rect.color
            context.fill()

            rect.verticles = tempVerticles

            return
        }

        rect.verticles = [
            { x: rect.left, y: rect.bottom },
            { x: rect.right, y: rect.bottom },
            { x: (rect.left + rect.right) / 2, y: rect.top }
        ]
        context.beginPath()
        context.moveTo(rect.left, rect.bottom)
        context.lineTo(rect.right, rect.bottom)
        context.lineTo((rect.left + rect.right) / 2, rect.top)
        context.closePath()
        context.fillStyle = rect.color
        context.fill()
    }

    changeColor(rect) {
        rect.color = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
}



export default RenderComponent