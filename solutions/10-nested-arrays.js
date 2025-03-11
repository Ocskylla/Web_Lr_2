// BEGIN
export const getSuperSeriesWinner=(scores)=>{
    let canada =0;
    let ussr =0;
    for(const score of scores){
        if(score[0]>score[1]){
            canada++;
        }else if(score[0]<score[1]){
            ussr++;
        }
    }
    if(canada>ussr) {
        return "canada";
    }
    else if(canada<ussr) {
        return "ussr";
    } else {
        return null;
    }
}
export default getSuperSeriesWinner;
// END