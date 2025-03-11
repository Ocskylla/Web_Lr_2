// BEGIN
export const flatten =(arr)=>{
    const res = [];
    for(const temp of arr){
        if(Array.isArray(temp)){
            res.push(...temp);
        }else {
            res.push(temp);
        }
    }
    return res;
}
export default flatten;
// END