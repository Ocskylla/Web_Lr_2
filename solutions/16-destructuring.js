const getDistance = ([x1, y1], [x2, y2]) => {
    const xs = x2 - x1;
    const ys = y2 - y1;
  
    return Math.sqrt(xs ** 2 + ys ** 2);
  };

// BEGIN
export const getTheNearestLocation = (arr, currentPoint) => {
    if(arr.length === 0){
    return null;
    }
    let minDistance = Infinity;
    let near = null;
    for (const [name, [x, y]] of arr) {
        const distance = getDistance(currentPoint, [x, y]);

        if (distance < minDistance) {
            minDistance = distance;
            near = [name, [x, y]];
        }
    }
    return near;
}
export default  getTheNearestLocation ;
// END
