// BEGIN
export const makeCensored =(text, badWords)=> {
    let words = text.split(' ');
    let censored = [];
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        if(badWords.includes(word)) {
            censored.push("$#%!");
        }else {
            censored.push(word);
        }
    }
    return censored.join(' ');
}
export default makeCensored;
// END