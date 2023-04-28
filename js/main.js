import { createPointSystem , startingPoints} from "./GeneratePoint.js";

const canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext("2d");

ctx.translate(canvas.width / 2, canvas.height / 2);

// Add points in a circle
let points = [];

createPointSystem(points)

function animate(){
    requestAnimationFrame(animate);
    ctx.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

    for(let i = 0; i < startingPoints.length; i++){
        startingPoints[i].point.draw(ctx);
    }   

    for(let i = 0; i < points.length; i++){
        points[i].draw(ctx);
    }
}

animate();