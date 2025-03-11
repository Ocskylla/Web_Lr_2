// BEGIN
import {set} from "lodash";

export const countUniqChars =(string)=> {
    const set1 = new Set();
    for (const char of string) {
        set1.add(char);
    }
    return set1.size;
}
export default countUniqChars;
// END