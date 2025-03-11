// BEGIN
export const getMax=(arr)=>{
    if(arr.length === 0){
        return null;
    }
    const [first,...rest] = arr;
    let max = first;
    for(const n of rest){
        if(n > max){
            max = n;
        }
    }
    return max;
}
export default getMax;
// END