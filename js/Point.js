export default class Point{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 1;
        this.color = "black";
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, Math.PI * 2, 0, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}