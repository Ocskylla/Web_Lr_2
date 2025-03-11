import {uniq} from "lodash";

const _ = require("lodash");

// BEGIN
export const getSameCount =(arr1,arr2) => {
    let count = 0;
    let uniqArr1 = uniq(arr1);
    let uniqArr2 = uniq(arr2);
    for(let i = 0; i < uniqArr1.length; i++) {
        for(let j = 0; j < uniqArr2.length; j++) {
            if(uniqArr1[i] === uniqArr2[j]) {
                count++;
                break;
            }
        }
    }
return count;
}
export default getSameCount;
// END