import Point from "./Point.js";

const startingPoints = createStartingPoints(4, 350);

function createStartingPoints(n, r){
    let points = [];
    for(let i = 0; i < n; i++){
        let x = Math.cos(i* Math.PI * 2/n) * r;
        let y = Math.sin(i* Math.PI * 2/n) * r;
    
        let point = new Point(x, y);
        points.push({
            id: i,
            next: i + 1 > n - 1? 0 : i + 1,
            last: i - 1 < 0 ? n - 1 : i - 1,
            consecutiveTimesPicked: 0,
            point: point
        });
    }

    return points;
}

function createNewPoint(p1, p2, points){
    let x = (p1.x + p2.x)/2;
    let y = (p1.y + p2.y)/2;
    let midPoint = new Point(x, y);

    points.push(midPoint);

    return midPoint;

}

function createPointSystem(points){
    let max = 30000;
    let n = 0;

    let currentPoint = startingPoints[0].point;
    let availablePoints = startingPoints.slice();

    while(n < max){
        n++;

        let randomPoint = availablePoints[Math.floor(Math.random() * availablePoints.length)];
        randomPoint.consecutiveTimesPicked++;

        let midPoint = createNewPoint(randomPoint.point, currentPoint, points);

        startingPoints.forEach(point => {
            if(point.id !== randomPoint.id){
                point.consecutiveTimesPicked = 0;
            }
        })

        if(randomPoint.consecutiveTimesPicked === 2){
            availablePoints = startingPoints.slice();
            availablePoints.splice(availablePoints.indexOf(startingPoints[randomPoint.last]), 1);
            availablePoints.splice(availablePoints.indexOf(startingPoints[randomPoint.next]), 1);
            availablePoints.splice(availablePoints.indexOf(startingPoints[randomPoint.id]), 1);
            
            //availablePoints.splice(randomPoint.last, 1);
            //availablePoints.splice(randomPoint.next, 1);
        } else {
            availablePoints = startingPoints.slice();
        }

        currentPoint = midPoint;

    }
}

export {createPointSystem, startingPoints};