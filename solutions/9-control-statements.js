// BEGIN
export const getTotalAmount =(money, name)=>{
    let total = 0;
    for(const parity of money){
        if(parity.slice(0,3)===name){
            total+=Number(parity.slice(3));
        }
    }
    return total;
}
export default getTotalAmount;
// END