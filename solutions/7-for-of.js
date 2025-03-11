// BEGIN
export const calculateAverage = (arr) =>{
    let sum = 0;
    let temp;
    if (arr.length === 0) { return null;}
    for(temp of arr){sum+=temp}
    return sum/arr.length;
}
export default calculateAverage;
// END