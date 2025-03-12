// BEGIN
export const reverse = (arr) => {
    const length = arr.length;
    let middle = length / 2;
    if (length % 2 !== 0) {
        middle = (length - 1) / 2;
    }
    for (let i = 0; i < middle; i++) {
        const temp = arr[i];
        arr[i] = arr[length - 1 - i];
        arr[length - 1 - i] = temp;
    }
};
export default reverse;
// END
