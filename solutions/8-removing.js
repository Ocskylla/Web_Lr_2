// BEGIN
export const getSameParity =(arr)=>{
    if(arr.length===0){
        return [];
    }
    const firstElement = arr[0];
    const isFirstEven = Math.abs(firstElement) % 2 === 0;

    const result = [];
    for (const number of arr) {
        if ((Math.abs(number) % 2 === 0) === isFirstEven) {
            result.push(number);
        }
    }

    return result;

}
export default getSameParity;
// END