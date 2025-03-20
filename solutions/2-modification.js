// BEGIN
export const swap = (arr) => {
  if (!Array.isArray(arr)) {
    return arr;
  }

  return arr.length < 2 ? arr : (() => {
    const firstElement = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = firstElement;
    return arr;
  })();
}
export default swap;
// END
