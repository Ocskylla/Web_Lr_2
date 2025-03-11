// BEGIN

export const swap =(arr)=>{
    if (arr.length === 0) return arr;
    if (arr.length === 1) return arr;
    else {
        let t = arr[0];
        arr[0] = arr[arr.length-1];
        arr[arr.length-1] = t;
        return arr;
    }
}
export default swap;
// END